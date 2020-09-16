<template>
  <div>
    <van-dialog v-model="show" title="标题" :before-close="beforeClose" show-cancel-button>
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.userName"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="form.phoneNumber"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="form.address"
          name="地址"
          label="地址"
          placeholder="地址"
          :rules="[{ required: true, message: '请填写地址' }]"
        />
      </van-form>
    </van-dialog>
    <van-popup v-model="paymentShow" position="bottom" :style="{ height: '40%' }">
      <payment :price="getCartPrice" @paid="afterPay" />
    </van-popup>
    <div class="order">
      <div class="addressDiv">
        <van-card class="address">
          <template #title>
            <div class="addTitle">
              <div class="addleft" v-text="address||'请填写地址'" />
            </div>
          </template>
          <template #desc>
            <div class="desc" v-text="userName||'请填写姓名'" />
            <div class="desc" v-text="phoneNumber||'请填写手机号'" />
          </template>
          <template #footer>
            <div class="addFoot">
              <div>
                <div>立即送出</div>
                <div>约{{ arrivalTime }}送达</div>
              </div>
              <div class="button">
                <van-button plain type="primary" hairline size="small" @click="onEdit">修改</van-button>
              </div>
            </div>
          </template>
        </van-card>
      </div>
      <div class="addressDiv">
        <template v-for="item in getCartList">
          <van-card
            :key="item.commodityId"
            class="orderDetail"
            :num="item.amount"
            :price="item.commodityMoney"
            :desc="item.describe"
            :title="item.commodityName"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template>
              <div class="addTitle">
                <div class="resName">{{ item.commodityName }}</div>
              </div>
            </template>
          </van-card>
        </template>
        <div />
      </div>
    </div>
    <div>
      <van-submit-bar :price="getCartPrice*100" button-text="去支付" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import Payment from '@/components/Payment'
import { Toast } from 'vant'
import { settleOrder } from '@/api/order'

export default {
  name: 'Order',
  components: { Payment },
  data() {
    return {
      paymentShow: false,
      show: false,
      userName: null,
      phoneNumber: null,
      address: null,
      form: {
        userName: null,
        phoneNumber: null,
        address: null
      }
    }
  },
  computed: {
    arrivalTime() {
      const t1 = new Date()
      const t2 = new Date()
      t1.setMinutes(t1.getMinutes() + 30)
      t2.setMinutes(t2.getMinutes() + 60)
      return `${t1.getHours()}:${t1.getMinutes()}-${t2.getHours()}:${t2.getMinutes()}`
    },
    getCartList() {
      return this.$store.getters.list
    },
    getCartPrice() {
      return this.$store.getters.price
    },
    getUserId() {
      return this.$store.getters.id
    },
    getUserName() {
      return this.$store.getters.name
    },
    getUserAddress() {
      return this.$store.getters.address
    }
  },
  created() {
    this.form.userName = this.getUserName
    this.form.address = this.getUserAddress
    this.form.phoneNumber = this.getUserId
    this.userName = this.getUserName
    this.address = this.getUserAddress
    this.phoneNumber = this.getUserId
  },
  methods: {
    // 弹窗关闭前调用方法
    beforeClose(action, done) {
      if (action !== 'cancel') {
        this.$nextTick(() => {
          this.userName = this.form.userName
          this.phoneNumber = this.form.phoneNumber
          this.address = this.form.address
        })
        done()
      } else {
        done()
      }
    },
    onSubmit() {
      const vaild = this.form.userName === undefined
        ? false : this.form.getUserAddress === undefined
          ? false : !(this.form.getUserId === undefined)
      console.log(vaild)
      if (vaild) {
        this.paymentShow = true
      } else {
        Toast.fail('请输入订单信息')
      }
    },
    onEdit() {
      this.show = true
    },
    afterPay() {
      settleOrder(this.form)
        .then(response => {
          Toast.success('支付成功')
          setTimeout(() => {
            this.$router.replace('/order')
          }, 2000)
        })
        .catch(error => {
          Toast.fail('支付失败:' + error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.headInfoDiv {
  margin-left: 3%;
  height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 94%;
}
.headInfo {
  margin-top: 5px;
  border-radius: 5px;
}
.addressDiv {
  margin-left: 3%;
  padding-bottom: 20px;
  width: 94%;
}
.address {
  border-radius: 5px;
  font-size: 16px;
}
.order {
  background-color: $theme-color;
}
.addTitle {
  display: flex;
  justify-content: space-between;
}
.desc {
  font-size: 14px;
  color: grey;
}
.addFoot {
  text-align: left;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
}
.addTime {
  color: skyblue;
}
.resName {
  color: grey;
}
.orderDetail {
  border-radius: 5px;
}
</style>
