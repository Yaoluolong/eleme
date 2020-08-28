<template>
  <div class="order">
    <div class="top">
      <van-tabs
        v-model="active"
        sticky
        title-active-color="#42b983"
        color="#42b983"
        @click="onClick"
      >
        <van-tab title="全部">
          <div class="wrap">
            <order-card />
          </div>
        </van-tab>
        <van-tab title="待完成">
          <div class="wrap">
            <order-card v-for="(item,index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="wrap">
            <order-card v-for="(item,index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
        <van-tab title="待/已退款">
          <div class="wrap">
            <order-card v-for="(item,index) in list" :key="index" :item="item" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { adaptiveScreen } from '@/mixins/adaptiveScreen'
import { getOrderList } from '@/api/order'
import { Toast } from 'vant'
import OrderCard from '@/components/OrderCard'

export default {
  name: 'Order',
  components: { OrderCard },
  mixins: [adaptiveScreen],
  data() {
    return {
      active: 0,
      list: []
    }
  },
  created() {
    this.search()
  },
  methods: {
    onClick() {
      this.search()
    },
    search() {
      getOrderList(this.active)
        .then(response => {
          const { data } = response
          this.list = data.list
        })
        .catch(error => {
          Toast.fail('加载失败:' + error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
</style>
