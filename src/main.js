import Vue from 'vue'
import App from './App.vue'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
