import api from '../../api/imgur';
import qs from 'qs';


const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        // pass in query string
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
    },
    // do not call mutations directly just call commit function
    logout: ({ commit }) => {
        // call setToken from mutations
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    }
};

// mutation updates the state
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

// naming of objects very important
export default {
    state,
    getters,
    actions,
    mutations
}