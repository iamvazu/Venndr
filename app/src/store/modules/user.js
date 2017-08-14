import * as types from '../mutation-types'

// initial state
const state = {
    location: '',
    query: '',
    resumeFileName: '',
    resumeStr: '',
    matches: {},
    queue: {}
}

const actions = {
    match ({ commit, state }, product) {
        this.matches = commit(types.GET_MATCHES)
        console.log(this.location)
    }
}

const mutations = {
    updateLocation (state, location) {
        state.location = location
    },
    updateQuery (state, query) {
        state.query = query
    },
    [types.GET_MATCHES] (state) {
        console.log('got here')
    }
}

export default {
    state,
    actions,
    mutations
}
