import Vue from 'vue'
import Router from 'vue-router'
import UserList from '../components/UserList.vue'
import UserDetail from '../components/UserDetail.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: UserList,
      template: '<user-list></user-list>'
    },
    // {
    //   // ルート定義を追加
    //   path: '/users/new',
    //   component: UserCreate,
    //   beforeEnter: (to, from, next) => {
    //     // 認証されていない状態でアクセスした時はloginページに遷移する
    //     if (!Auth.loggedIn()) {
    //       next({
    //         path: '/login',
    //         query: { redirect: to.fullPath }
    //       })
    //     } else {
    //       // 認証済みであればそのまま新規ユーザー作成ページへ進む
    //       next()
    //     }
    //   }
    // },
    {
      path: '/users/:userId',
      component: UserDetail
    },
    // {
    //   path: '/login',
    //   component: Login
    // },
    // {
    //   path: '/logout',
    //   beforeEnter: function(to, from, next){
    //     Auth.logout()
    //     next('/')
    //   }
    // }
  ]
})