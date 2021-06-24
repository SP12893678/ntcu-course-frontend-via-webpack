const initState = function () {
    return {
        loginToken: '',
        user:{
            name: '',
            email: '',
            password: '',
            role: ''
        }
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