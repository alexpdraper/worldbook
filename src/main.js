import 'normalize.css'
import './assets/style/index.styl'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toaster from './plugins/toaster'

Vue.config.productionTip = false

Vue.use(toaster)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
