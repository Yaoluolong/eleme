<template>
  <div class="payment">
    <div class="title">付款详情</div>
    <van-divider />
    <div class="price">
      ￥
      <span class="price-number">{{ price }}</span>
    </div>
    <van-cell-group>
      <van-cell title="订单信息" value="付款" />
      <van-cell title="付款方式" is-link>
        <span>支付宝</span>
      </van-cell>
    </van-cell-group>
    <div class="bottom">
      <van-button type="primary" block @click="onClick">立即付款</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  props: {
    price: {
      type: Number,
      default: 0.0
    }
  },
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$emit('paid')
    }
  }
}
</script>

<style lang="scss" scoped>
.payment {
  .title {
    text-align: center;
    padding: 10px;
  }
  .price {
    padding: 10px;
    text-align: center;
    font-weight: 700;
    .price-number {
      font-size: 30px;
    }
  }
  .bottom {
    padding: 10px;
    text-align: center;
  }
}
</style>
