const initState = function () {
    return {
        courses: []
    }
}
const state = initState()
const getters = {}

// actions
const actions = {
    test ({ commit, state }, data) {
        console.log('cross state test', data)
    },
    getAllCourseData ({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            dispatch('http/get', { api: 'courses' }, { root: true }).then(res => {
                if (res.status == '1') {
                    commit('setAllCourseData', res.data)
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

    setAllCourseData (state, value) {
        state.courses = value
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
