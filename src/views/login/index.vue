<template>
  <div class="login-container">
    <div class="login-title">
      <h1>企业点餐系统</h1>
    </div>
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.userId"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <div class="login-link" @click="toRegistration">
            <h5>尚未注册?点击进行注册</h5>
          </div>
          <van-button :loading="isLoading" block type="primary" native-type="submit">登 录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      // 登录表单
      form: {
        userId: '',
        password: ''
      },
      isLoading: false, // 登录按钮加载状态
      redirect: undefined, // 重定向url参数
      otherQuery: {}// 其他url参数
    }
  },
  watch: {
    $route: {
      // 路由url监视器
      handler(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    // 跳转到注册页面
    toRegistration() {
      this.$router.push('registration')
    },
    // 提交表单
    onSubmit() {
      this.isLoading = true
      // this.$router.push('menu')
      this.$store
        .dispatch('user/login', this.form)
        .then(() => {
          this.$router.push({
            path: this.redirect || '/',
            query: this.otherQuery
          })
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    // 其他url参数转换方法
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.login-container {
  text-align: center;
  margin: 20px;
  padding-top: 20px;
  .login-title {
    color: $theme-color;
  }
  .login-link {
    color: $theme-color-light;
  }
}
</style>
