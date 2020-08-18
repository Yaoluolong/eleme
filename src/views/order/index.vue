<template>
  <div class="order">
    <div class="top">
      <van-tabs v-model="active" sticky>
        <van-tab title="全部">
          <div class="wrap">
            <order-card />
          </div>
        </van-tab>
        <van-tab title="待完成">
          <div class="wrap">
            <order-card />
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="wrap">
            <order-card />
          </div>
        </van-tab>
        <van-tab title="待/已退款">
          <div class="wrap">
            <order-card />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { adaptiveScreen } from '@/mixins/adaptiveScreen'
import OrderCard from '@/components/OrderCard'

export default {
  name: 'Order',
  components: { OrderCard },
  mixins: [adaptiveScreen],
  data() {
    return {
      active: 0
    }
  },
  methods: {
    beforeChange() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
</style>
