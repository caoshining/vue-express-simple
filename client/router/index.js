import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = (resolve) => require(['../components/Login.vue'], resolve)

const Home = (resolve) => require(['../components/Home.vue'], resolve)

const Note = (resolve) => require(['../components/Note.vue'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/note',
      component: Note
    }
  ]
})
