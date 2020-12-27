import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import dayjs from 'dayjs'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VCharts from 'v-charts'
import JsonExcel from 'vue-json-excel'
import './globalcomponents/index.js'

Vue.use(ElementUI, { locale })
dayjs().format();
Vue.use(mavonEditor)
Vue.use(VCharts)
Vue.component('downloadExcel', JsonExcel)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')