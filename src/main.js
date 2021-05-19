import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// COMPONENTS
import { Connexion, Inscription, ForgetPassword } from './components.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Connexion },
  { path: '/inscription', component: Inscription },
  { path: '/forgetPassword', component: ForgetPassword },
]

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
