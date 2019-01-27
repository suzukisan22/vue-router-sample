<template>
  <!-- コンポーネントで使用するテンプレートHTMLを記載-->
  <div>
    <div class="loading" v-if="loading">読み込み中...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <!-- usersがロードされたら各ユーザーの名前を表示する -->
    <div v-if="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.description }}</p>
    </div>
  </div>
</template>
<script>
import GetUser from '../lib/GetUser'

export default {
  data: function() {
    return {
      loading: false,
      user: null,
      error: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      // this.$route.params.userIdに現在のURL上のパラメータに対応したuserIdが格納される
      GetUser(this.$route.params.userId, (function (err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  },
}
</script>
