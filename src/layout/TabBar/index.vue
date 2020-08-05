<template>
  <div>
    <van-tabbar v-model="active" active-color="#42b983" @change="onChange">
      <van-tabbar-item icon="bars">菜单</van-tabbar-item>
      <van-tabbar-item icon="cart" :badge="count!==0?count:null">购物车</van-tabbar-item>
      <van-tabbar-item icon="column">订单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {},
  data() {
    return {
      active: 0
    }
  },
  computed: {
    count() {
      return this.$store.getters.count
    }
  },
  mounted() {
    this.setActiveTab()
  },
  methods: {
    // 设置初始tab
    setActiveTab() {
      const path = this.$route.path
      let active = 0
      switch (path) {
        case '/menu':
          active = 0
          break
        case '/cart':
          active = 1
          break
        case '/order':
          active = 2
          break
        default:
          break
      }
      this.active = active
    },
    // tab改变事件
    onChange(index) {
      switch (index) {
        case 0:
          this.$router.push('menu')
          break
        case 1:
          this.$router.push('cart')
          break
        case 2:
          this.$router.push('order')
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
</style>
