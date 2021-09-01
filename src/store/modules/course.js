const initState = function () {
    return {
        courses: [],
        courseOptions: [],
        year: [],
        term: [
            { value: 1, name: '第一學期' },
            { value: 2, name: '第二學期' }
        ],
        coursesDetail: [],
        courseReviews: []
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
    },
    getCourseDetail ({ dispatch, commit, state }, courseID) {
        return new Promise((resolve, reject) => {
            dispatch('http/get', { api: `course/detail/${courseID}` }, { root: true }).then(res => {
                if (res.status == '1') {
                    commit('setCourseDetail', res.data)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    },
    getCourseReviews ({ dispatch, commit, state }, { courseCode, courseTeacher }) {
        return new Promise((resolve, reject) => {
            dispatch('http/post', { api: 'course/reviews', code: courseCode, teacher: courseTeacher }, { root: true }).then(res => {
                if (res.status == '1') {
                    commit('setCourseReviews', res.data)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    },
    postCourseReview ({ dispatch, commit, state }, { courseCode, courseTeacher, reviewType, reviewContent }) {
        return new Promise((resolve, reject) => {
            dispatch('http/post', {
                api: 'course/review/insert',
                code: courseCode,
                teacher: courseTeacher,
                type: reviewType,
                review_content: reviewContent
            }, { root: true }).then(res => {
                if (res.status == '1') {
                    commit('setCourseReviews', res.data)
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    },
    likeCourseReview ({ dispatch, commit, state }, { reviewID, like }) {
        return new Promise((resolve, reject) => {
            dispatch('http/post', {
                api: 'course/review/like',
                id: reviewID,
                like: like
            }, { root: true }).then(res => {
                if (res.status == '1') {
                    commit('setCourseReview', res.data)
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
    setCourseDetail (state, value) {
        state.coursesDetail.push(value)
    },
    setCourseReviews (state, value) {
        value.reviews.forEach(item => { item.date_time = new Date(item.date_time) })
        state.courseReviews = value
    },
    setCourseReview (state, value) {
        const reviewIdx = state.courseReviews.reviews.findIndex(review => review.id == value.reviews[0].id)
        value.reviews[0].date_time = new Date(value.reviews[0].date_time)
        Object.assign(state.courseReviews.reviews[reviewIdx], value.reviews[0])
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
