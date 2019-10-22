import Vue from 'vue'
import App from './App'
import Json from './Json.js' //数据模拟
import util from './common/util.js'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$msg=util.msg
const app = new Vue({
    ...App
})
app.$mount()
