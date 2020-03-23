import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vSelect from 'vue-select'
import vueNumeralFilterInstaller from 'vue-numeral-filter'
import vueMoment from 'vue-moment'
// style
import 'leaflet/dist/leaflet.css'
import './assets/css/app.css'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(vueNumeralFilterInstaller)
Vue.use(vueMoment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
