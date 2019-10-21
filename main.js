import Vue from 'vue'
import App from './App'
import Json from './Json.js' //数据模拟
import head from'./components/head'
Vue.component(head)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
