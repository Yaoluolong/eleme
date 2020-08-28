<template>
  <div class="order-card">
    <van-toast id="van-toast" />
    <div class="title">
      订单编号:{{ item.orderId||20170528510001 }}
      <span>￥{{ item.orderMoney||88.00 }}</span>
    </div>
    <div class="content">
      <div class="items">
        <ul>
          <li v-for="(i,index) in item.items" :key="index">
            {{ i.commodityName }}*{{ i.number }}
            <span style="float:right">￥{{ i.commodityPrice }}</span>
          </li>
        </ul>
      </div>
      <div class="date">
        <span>下单时间</span>2018年9月18日 18:20
      </div>
    </div>
    <div class="operation">
      <div class="status">{{ statusLabel }}</div>
      <van-button v-if="item.status==='1'" type="warning" round size="small" @click="onClick">取消订单</van-button>
    </div>
    <van-dialog
      v-model="show"
      title="取消订单申请"
      show-cancel-button
      confirm-button-text="提交"
      :before-close="beforeClose"
    >
      <van-form ref="form">
        <van-field
          v-model="reason"
          rows="2"
          autosize
          label="理由"
          type="textarea"
          maxlength="50"
          placeholder="请输入取消订单的理由"
          show-word-limit
          :rules="[{ required: true, message: '理由不能为空' }]"
        />
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
import { cancelOrder } from '@/api/order'
import { Toast } from 'vant'

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
          status: '1',
          orderTime: null,
          items: [
            {
              commodityName: '商品名称',
              commodityId: null,
              number: null,
              commodityPrice: null
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      show: false,
      reason: ''
    }
  },
  computed: {
    statusLabel() {
      let label = ''
      switch (this.item.status) {
        case '0':
          label = '待完成'
          break
        case '1':
          label = '已完成'
          break
        case '2':
          label = '待退款'
          break
        case '3':
          label = '已退款'
          break
        default:
          break
      }
      return label
    }
  },
  methods: {
    onClick() {
      this.show = true
    },
    beforeClose(action, done) {
      if (action !== 'cancel') {
        this.$refs.form.validate()
          .then(() => {
            this.onSubmit(done)
          })
          .catch(() => {
            done(false)
          })
      } else {
        done()
      }
    },
    onSubmit(done) {
      cancelOrder()
        .then(response => {
          done()
        })
        .catch(error => {
          setTimeout(() => {
            Toast.fail('提交失败:' + error)
            done(false)
          }, 5000)
        })
    }
  }
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
