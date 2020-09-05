<template>
  <div class="register-form">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.userId"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="form.userName"
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
        v-model="form.password2"
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
import { registration } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'Registration',
  data() {
    return {
      // 登录表单
      form: {
        userId: '',
        userName: '',
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
      if (this.form.password === this.form.password2) {
        registration(this.form)
          .then(response => {
            Toast.success('注册成功')
          })
          .catch(error => {
            Toast.fail('注册失败:' + error)
          })
      } else {
        Toast.fail('密码输入不一致')
      }
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
