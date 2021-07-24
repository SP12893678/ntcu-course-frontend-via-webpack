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
        }
    },
    mutations: {
        dialogBox (state, value) {
            state.dialogBox.dialog = value.dialog
            Object.assign(state.dialogBox.option, (value.option) ? value.option : {})
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
