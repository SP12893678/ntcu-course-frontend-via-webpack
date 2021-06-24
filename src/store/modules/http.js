import axios from 'axios'

// axios.defaults.timeout = 60000
axios.defaults.baseURL = 'http://127.0.0.1:9090' //process.env.API_URL
// axios.defaults.headers = {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
// }


const $http = axios

const initState = function () {
    return {

    }
}
//state
const state = initState()
const getters = {}

const beforeApiCall = (method, api) => {
    consoleLog('is caling...', method, api)
}

const consoleLog = (text, json, data) => {
    if (true || process.env.NODE_ENV == 'development' || window.location.href.indexOf('test') >= 0) {
        console.log(text, json, data)
    }
}

const respondFunc = ({ dispatch, commit, state, rootState, json, data, resolve, reject }) => {
    data.status = parseInt(data.status)
    consoleLog('api called:', json, data)
    return data
}



//actions
const actions = {
    post ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            beforeApiCall('post', json.api)
            const api = json.api
            delete json.api
            json['loginToken'] = rootState.user.loginToken
            $http.post(api, json)
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    commit('dialogBox',{dialog:true}, { root: true });
                    resolve(false)
                })
        })
    },
    get ({ dispatch, commit, state, rootState }, json) {
        return new Promise((resolve, reject) => {
            // let conf = getHttpConfig({ rootState });
            const conf = {}
            conf.params = json
            console.log(conf)
            beforeApiCall('get', json.api)
            $http.get(json.api)
                .then(({ data }) => {
                    resolve(respondFunc({ dispatch, commit, state, rootState, json, data, resolve, reject }))
                })
                .catch((error) => {
                    console.log(error.message)
                    resolve(false)
                })
        })
    }
}

// mutations
const mutations = {

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}