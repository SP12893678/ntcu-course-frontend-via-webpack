import './styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

// router.beforeEach((to, from, next) => {

// })

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
