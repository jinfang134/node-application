import Vue from 'vue'
import axios from "axios";
import App from './App.vue'

Vue.config.productionTip = false

import VueCookie from 'vue-cookie'

import router from '@/router'

import ElementUI from 'element-ui'
import elementUIVerify from 'element-ui-verify'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueCookie)

Vue.prototype.$http = axios

Vue.use(ElementUI, {
  size: 'small',
  // zIndex: 3000
})
Vue.use(elementUIVerify)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
