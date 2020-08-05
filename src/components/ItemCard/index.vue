<template>
  <div class="item-card">
    <div class="item-card-image">
      <van-image width="100" height="100">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>
    </div>
    <div class="item-card-content">
      <div class="item-card-header">
        <slot name="header">{{ item.commodityName?item.commodityName:'标题' }}</slot>
      </div>
      <div v-if="wrapVisible" class="item-card-wrap">
        <slot name="wrap">
          <div>{{ item.describe?item.describe:'描述' }}</div>
          <div>{{ item.orderNumber?item.orderNumber:'月销售量' }}</div>
        </slot>
      </div>
      <div class="item-card-footer">
        <slot name="footer">
          <div class="item-card-price">
            ￥
            <span>{{ item.commodityMoney?item.commodityMoney:'价格' }}</span>
          </div>
          <div class="item-card-button">
            <van-button
              v-show="number!==0"
              icon="arrow-left"
              size="mini"
              color="#42b983"
              round
              plain
              @click="reduceNumber"
            />
            <span v-show="number!==0" style="margin:0 3px 0 3px">{{ number }}</span>
            <van-button icon="arrow" size="mini" color="#42b983" round @click="addNumber" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ItemCard',
  components: {},
  props: {
    wrapVisible: {
      type: Boolean,
      default: true
    },
    item: {
      type: Object,
      default: () => {
        return {
          commodityId: null,
          commodityName: null,
          describe: null,
          orderNumber: null,
          commodityMoney: null,
          number: 0
        }
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    number() {
      return this.item.number
    }
  },
  methods: {
    // 获取store.cart的方法
    ...mapMutations('cart', [
      'addItem',
      'removeItem'
    ]),
    reduceNumber() {
      this.removeItem(this.item)
    },
    addNumber() {
      this.addItem(this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  overflow: hidden;
  width: 100%;
  display: flex;
  .item-card-image {
    margin: 10px;
  }
  .item-card-content {
    margin: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item-card-header {
      font-weight: 600;
      font-size: 18px;
    }
    .item-card-wrap {
      font-size: 14px;
      color: #999999;
    }
    .item-card-footer {
      display: flex;
      justify-content: space-between;
      .item-card-price {
        font-weight: 600;
        color: #ff6034;
        span {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
