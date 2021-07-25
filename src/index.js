import './styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import vuescroll from 'vuescroll'

Vue.use(Vuelidate)
Vue.use(vuescroll)
Vue.prototype.$vuescrollConfig = {
    bar: {
        background: '#666'
    }
}
// router.beforeEach((to, from, next) => {

// })

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
