// import * as types from '../mutation-types'
import axios from 'axios'
import router from '@/router/index'
// initial state
const state = {
    user: {
        location: '',
        query: '',
        resumeFile: {}
    },
    resArr: [],
    sorted: [],
    queue: []
}

const actions = {
    submit({ commit, state }) {
        console.log('submit called');
        const { user } = state;
        console.log(user);

        let post = new FormData();
        post.append('location', user.location);
        post.append('query', user.query);
        post.append('resume', user.resumeFile);

        axios.post('http://localhost:9000/api/match', post)
        .then(resp => {
            console.log(resp);
            state.resArr = resp.data.resArr;
            state.sorted = resp.data.sorted;
            router.push('match');
        })
        .catch(err => {
            console.log(err);
        });
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
    }
}

export default {
    state,
    actions,
    mutations
}
