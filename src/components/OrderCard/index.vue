<template>
  <div class="order-card">
    <div class="title">订单编号:{{ item.orderId }}</div>
    <div class="content">内容</div>
    <div class="operation">操作</div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          orderId: null,
          commodityName: null,
          address: null,
          orderMoney: null,
          status: null,
          orderTime: null,
          items: [
            {
              commodityName: null,
              commodityId: null,
              orderAmount: null,
              commodityPrice: null
            }
          ]
        }
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
.order-card {
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  .title,
  .content,
  .operation {
    margin: 5px;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    color: $theme-color;
  }
}
</style>
