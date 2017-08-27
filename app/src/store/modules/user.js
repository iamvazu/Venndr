import * as types from '../mutation-types'
// import PDFJS from 'pdfjs-dist'
import axios from 'axios'

// initial state
const state = {
    user: {
        location: '',
        query: '',
        resumeFile: {},
        resumeStr: ''
    },
    matches: {},
    queue: []
}

const actions = {
    submit({ commit, state }) {
        console.log('submit called');
        const { user } = state;
        console.log(user);
        console.log(this.location)
    },
    // perform file upload
    async upload({ commit, state }, $file) {
        console.log('upload called');
        // commit local file change, then upload to api
        commit('updateResumeFile', $file);
        let fd = new FormData();
        fd.append('resu', $file);

        axios.post('/api/upload', fd)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const mutations = {
    updateLocation(state, location) {
        state.user.location = location
    },
    updateQuery(state, query) {
        state.user.query = query
    },
    updateResumeFile(state, resumeFile) {
        state.user.resumeFile = resumeFile
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
