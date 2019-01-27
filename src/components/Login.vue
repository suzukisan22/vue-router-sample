<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">ログインしてください</p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      <label><input v-model="pass" placeholder="password" type="password"></label><br>
      <button type="submit">ログイン</button>
      <p v-if="error" class="error">ログインに失敗しました</p>
    </form>
  </div>
</template>
<script>
import Auth from '../lib/Auth'

export default {
  data: function () {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login: function () {
      Auth.login(this.email, this.pass, (function (loggedIn) {
        if (!loggedIn) {
          this.error = true
        } else {
          // redirectパラメータが付いている場合はそのパスに遷移
          this.$router.replace(this.$route.query.redirect || '/')
        }
      }).bind(this))
    }
  }
}
</script>
