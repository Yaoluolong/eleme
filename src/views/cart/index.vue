<template>
  <div class="cart">
    <header @click="clearCart">全部清除</header>
    <div class="cart-wrap">
      <item-card v-for="(item,index) in items" :key="index" :item="item" :wrap-visible="false" />
    </div>
    <footer>
      <div class="cart-footer-amount">
        <div class="total">
          总计
          <span>{{ price }}件</span>
          商品
        </div>
        <div class="price">
          总价
          <span>￥{{ count }}</span>
        </div>
      </div>
      <div class="cart-footer-button" @click="toSettlement">去结算</div>
    </footer>
  </div>
</template>

<script>
import { getCartList } from '@/api/cart'
import { adaptiveScreen } from '@/mixins/adaptiveScreen'
import ItemCard from '@/components/ItemCard'
import { Toast } from 'vant'
import { Dialog } from 'vant'

export default {
  name: 'Cart',
  components: { ItemCard },
  mixins: [adaptiveScreen],
  data() {
    return {}
  },
  computed: {
    items() {
      return this.$store.getters.list
    },
    // 购物车的商品总量
    count() {
      return this.$store.getters.count
    },
    // 购物车的商品总价
    price() {
      return this.$store.getters.price
    }
  },
  created() {
    getCartList()
      .then(response => {
        const { data } = response
        this.list = data.list
      })
      .catch(error => {
        Toast.fail('加载失败:' + error)
      })
  },
  methods: {
    // 清空购物车
    clearCart() {
      Dialog.confirm({
        title: '提示',
        message: '确认清空购物车?',
        beforeClose: (action, done) => {
          if (action === 'confirm') {
            this.$store.dispatch('cart/removeAll')
              .then(() => {
                done()
              })
              .catch(() => {
                done()
              })
          } else {
            done()
          }
        }
      })
    },
    // 跳转至结算页面
    toSettlement() {
      // if (this.items.length !== 0) {
      this.$router.push({ name: 'settlement' })
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.cart {
  header {
    width: 100%;
    height: 30px;
    background: #cecece;
    color: #fff;
    line-height: 30px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  footer {
    position: fixed;
    bottom: 50px;
    width: 100%;
    height: 50px;
    background: $background-color;
    display: flex;
    justify-content: space-between;
    .cart-footer-amount {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .total,
      .price {
        font-size: 12px;
        span {
          font-size: 20px;
          font-weight: 700;
          margin: 0 5px 0 5px;
        }
      }
      .total {
        span {
          color: $theme-color;
        }
      }
      .price {
        span {
          color: #ff6034;
        }
      }
    }
    .cart-footer-button {
      font-size: 18px;
      font-weight: 600;
      line-height: 50px;
      color: aliceblue;
      height: 100%;
      width: 100px;
      text-align: center;
      background: $theme-color;
    }
  }
}
</style>
