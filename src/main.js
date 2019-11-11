import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './plugins/vant.js'
import router from './router'

Vue.config.productionTip = false
localStorage.setItem("lastname", 'false');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
