<template>
  <div class="register-form">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="form.name"
        name="姓名"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="重复密码"
        label="重复密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请再次填写密码' }]"
      />
      <div style="margin: 16px;">
        <div class="login-link" @click="toLogin">
          <h5>已有账号?点击进行登录</h5>
        </div>
        <van-button :loading="isLoading" block type="primary" native-type="submit">注 册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      // 登录表单
      form: {
        username: '',
        name: '',
        password: '',
        password2: ''
      },
      isLoading: false
    }
  },
  methods: {
    // 跳转到登录页面
    toLogin() {
      this.$router.push('login')
    },
    onSubmit() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.register-form {
  text-align: center;
  margin: 20px;
  .login-link {
    color: $theme-color-light;
  }
}
</style>
