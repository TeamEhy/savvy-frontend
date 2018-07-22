// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import fa from 'fontawesome-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue2Filters from 'vue2-filters'
 
Vue.use(Vue2Filters)
Vue.use(VueAxios, axios)
Vue.use(Buefy)
Vue.use(fa)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
