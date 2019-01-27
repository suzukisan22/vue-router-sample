<template>
  <!-- コンポーネントで使用するテンプレートHTMLを記載-->
  <div>
    <div class="loading" v-if="loading">読み込み中...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <!-- usersがロードされたら各ユーザーの名前を表示する -->
    <div v-for="user in users" :key="user.id">
      <h2>
        <router-link v-bind:to="{name: 'UserDetail', params : { userId: user.id }}">
          {{ user.name }}
        </router-link>
      </h2>
    </div>
  </div>
</template>
<script>
import GetUsers from '../lib/GetUsers'

export default {
  data: function () {
    return {
      loading: false,
      users: function () { return [] },
      error: null
    }
  },

  // 初期化時にデータを取得
  created: function () {
    this.fetchData()
  },

  // $routerの変更をwatchすることでルーティングが変更された時に再度データを取得
  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData: function () {
      this.loading = true
      // 取得したデータの結果をusersに格納する
      // Function.prototype.bindはthisのスコープを渡すために利用

      GetUsers((function (err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}
</script>
