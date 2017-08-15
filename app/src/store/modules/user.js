import * as types from '../mutation-types'
// import PDFJS from 'pdfjs-dist'
import axios from 'axios'

// initial state
const state = {
    location: '',
    query: '',
    resumeFile: {},
    resumeStr: '',
    matches: {},
    queue: []
}

const actions = {
    match ({ commit, state }, product) {
        this.matches = commit(types.GET_MATCHES)
        console.log(this.location)
    },
    upload ({ commit, state }, e) {
        const file = e.target.files[0] || e.dataTransfer.files[0]
        if (file.type !== 'application/pdf') return

        const url = `http://localhost:9000/api/upload`
        axios.post(url, file)
        .then(x => console.log(x))
    }
}

const mutations = {
    updateLocation (state, location) {
        state.location = location
    },
    updateQuery (state, query) {
        state.query = query
    },
    updateResumeFile (state, resumeFile) {
        state.resumeFile = resumeFile
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
