<template>
  <div>
    <van-nav-bar :title="titleLabel" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {}
  },
  computed: {
    titleLabel() {
      return this.title === 'detail' ? '商品详情' : '确认订单'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

/deep/.van-nav-bar {
  background-color: $theme-color;
  .van-icon {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
    font-size: 18px;
  }
}
</style>
