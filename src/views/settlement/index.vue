<template>
  <div>
    <div class="order">
      <div class="addressDiv">
        <van-card class="address">
          <van-form @submit="onSubmit">
            <template #title>
              <div class="addTitle">
                <div class="addleft">中国福建省福州市晋安区斗门邮政12楼</div>
              </div>
            </template>
            <template #desc>
              <div class="desc">林先生</div>
              <div class="desc">13356565566</div>
            </template>
            <template #footer>
              <div class="addFoot">
                <div>立即送出</div>
                <div class="addTime">约{{ arrivalTime }}送达></div>
              </div>
            </template>
          </van-form>
        </van-card>
      </div>
      <div class="addressDiv">
        <van-card
          class="orderDetail"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template>
            <div class="addTitle">
              <div class="resName">鲜水果小铺</div>
            </div>
          </template>
        </van-card>
        <div />
      </div>
    </div>
    <div>
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  components: {},
  data() {
    return {

    }
  },
  computed: {
    arrivalTime() {
      const t1 = new Date()
      const t2 = new Date()
      t1.setMinutes(t1.getMinutes() + 30)
      t2.setMinutes(t2.getMinutes() + 60)
      return `${t1.getHours()}:${t1.getMinutes()}-${t2.getHours()}:${t2.getMinutes()}`
    }
  },
  methods: {
    onSubmit() {
      console.log('提交订单')
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
