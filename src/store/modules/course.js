const initState = function () {
    return {
        courses: [],
        courseOptions: [],
        year: [],
        term: [
            { value: 1, name: '第一學期' },
            { value: 2, name: '第二學期' }
        ]
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
    },
    getCourseOptions ({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            dispatch('http/get', { api: 'courseOptions' }, { root: true }).then(res => {
                if (res.status == '1') {
                    commit('setCourseOptions', res.data)
                    commit('setOptionYear', res.data)
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
    setCourseOptions (state, value) {
        state.courseOptions = value
    },
    setOptionYear (state, value) {
        state.year = [...new Set(value.map(item => item.year))]
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
