import * as types from '../mutation-types'
// import PDFJS from 'pdfjs-dist'
// import axios from 'axios'

// initial state
const state = {
    user: {
        location: '',
        query: '',
        resumeFile: {},
        resumeStr: '',
    },
    matches: {},
    queue: []
}

const actions = {
    submit({ commit, state }) {
        console.log('submit called');
        const { user } = state;

        console.log(this.location)
    }
}

const mutations = {
    updateLocation(state, location) {
        state.location = location
    },
    updateQuery(state, query) {
        state.query = query
    },
    updateResumeFile(state, resumeFile) {
        state.resumeFile = resumeFile
        console.log(state.resumeFile)
    },
    [types.GET_MATCHES](state) {
        console.log('got here')
    }
}

export default {
    state,
    actions,
    mutations
}
