import Vue from 'vue'
import Vuex from 'vuex'

import http from './modules/http'
import user from './modules/user'
import course from './modules/course'

const _modules = () => {
    return {
        http: http,
        user: user,
        course: course
    }
}

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: _modules(),
    state: {
        dialogBox: {
            dialog: false,
            option: {}
        },
        snackBar: {
            show: false,
            message: ''
        }
    },
    mutations: {
        dialogBox (state, value) {
            state.dialogBox.dialog = value.dialog
            Object.assign(state.dialogBox.option, (value.option) ? value.option : {})
        },
        snackBar (state, value) {
            state.snackBar.show = value.show
            state.snackBar.message = value.message
        },
        increment (state) {
            state.count++
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
})

export default store
