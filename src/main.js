import Vue from 'vue'
import App from './App.vue'
import VXETable from 'vxe-table'

import 'vxe-table/lib/style.css'
import './assets/style/all.scss'

Vue.use(VXETable)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
