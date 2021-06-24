import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../views/Homepage.vue'
import Dashboard from '../views/Dashboard.vue'
import Layout from '../views/Layout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Error from '../views/Error.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        { 
            path: '/', 
            component: Layout,
            children: [
                {path: '/', component: Homepage },
                {path: '/dashboard', component: Dashboard }
            ]
        },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register },
        { path: '/404', name: 'error', component: Error },
        { path: '*', redirect: '/404' }
    ]
    // mode: 'history'
})

// router.beforeEach(async (to, from, next) => {
//     next()
// })

export default router
