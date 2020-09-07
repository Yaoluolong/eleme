<template>
  <div>
    <van-dialog v-model="show" title="标题" show-cancel-button>
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
    <div class="order">
      <div class="addressDiv">
        <van-card class="address">

          <template #title>
            <div class="addTitle">
              <div class="addleft">{{ form.address||'请填写地址' }}</div>
            </div>
          </template>
          <template #desc>
            <div class="desc">{{ form.userName||'请填写姓名' }}</div>
            <div class="desc">{{ form.phoneNumber|| '请填写手机号' }}</div>
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
        <template v-for="item in items">
          <van-card
            :key="item.commodityId"
            class="orderDetail"
            :num="item.number"
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
      <van-submit-bar :price="getCartCount" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  components: {},
  data() {
    return {
      show: false,
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
    getCartCount() {
      return this.$store.getters.count
    }
  },
  methods: {
    onSubmit() {
      console.log('提交订单')
    },
    onEdit() {
      console.log('123')
      this.show = true
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
