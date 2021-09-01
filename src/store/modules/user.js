import router from '../../router'

const initState = function () {
    return {
        loginToken: '',
        avatar: '',
        name: '',
        email: '',
        password: '',
        role: ''

    }
}
const state = initState()
const getters = {}

// actions
const actions = {
    test ({ commit, state }, data) {
        console.log('cross state test', data)
    },
    getUserData ({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            dispatch('http/post', { api: 'profile' }, { root: true }).then((data) => {
                if (data.status) {
                    commit('setUserData', data.result)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    },
    registerUser ({ dispatch, commit, state }, { avatar, name, email, password }) {
        return new Promise((resolve, reject) => {
            dispatch('http/post', {
                api: 'register',
                avatar,
                name,
                email,
                password
            }, { root: true }).then((data) => {
                if (data.status) {
                    const option = {
                        title: '註冊成功',
                        message: '信箱驗證後即可成為會員！',
                        btnConfirm: {
                            event: () => {
                                router.push('/login')
                            }
                        }
                    }
                    commit('dialogBox', { dialog: true, option }, { root: true })
                    resolve(true)
                } else {
                    const option = { title: '註冊失敗', message: 'xxxxxxx' }
                    commit('dialogBox', { dialog: true, option }, { root: true })
                    resolve(false)
                }
            })
        })
    }

}

// mutations
const mutations = {

    setUserLogin (state, value) {

    },
    setUserLogout (state) {

    },
    setUserData (state, value) {

    },

    reset (state) {
        state = Object.assign(state, initState())
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
