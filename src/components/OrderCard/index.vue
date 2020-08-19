<template>
  <div class="order-card">
    <div class="title">
      订单编号:{{ item.orderId||20170528510001 }}
      <span>￥{{ item.orderMoney||88.00 }}</span>
    </div>
    <div class="content">
      <div class="items">
        <ul>
          <li v-for="(i,index) in item.items" :key="index">
            商品名称*7
            <span style="float:right">￥22.00</span>
          </li>
        </ul>
      </div>
      <div class="date">
        <span>下单时间</span>2018年9月18日 18:20
      </div>
    </div>
    <div class="operation">
      <div class="status">状态</div>
      <van-button type="primary" round size="small">主要按钮</van-button>
    </div>
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
  display: flex;
  flex-direction: column;
  padding: 10px;
  .title,
  .content,
  .operation {
    margin: 3px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    color: $theme-color;
    span {
      float: right;
      color: #ff6034;
    }
  }
  .content {
    .items {
      background: #eeeeee;
      padding: 10px;
    }
    .date {
      margin: 10px 10px 0px 10px;
      span {
        margin-right: 10px;
        color: #c8c9cc;
      }
    }
  }
  .operation {
    text-align: right;
    display: flex;
    justify-content: space-between;
    .status {
      color: #e91e63;
      font-size: 16px;
      font-weight: 600;
      margin-left: 10px;
      text-align: right;
      line-height: 32px;
    }
    button {
      margin-right: 10px;
    }
  }
}
</style>
