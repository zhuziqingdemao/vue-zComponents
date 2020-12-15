import Vue from 'vue'
import App from './App.vue'
import ZComponent from '../packages'

Vue.use(ZComponent)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
