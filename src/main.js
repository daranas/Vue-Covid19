import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vSelect from 'vue-select'
// style
import 'leaflet/dist/leaflet.css'
import './assets/css/app.css'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
