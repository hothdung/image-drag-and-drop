import api from '../../api/imgur';


const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    // do not call mutations directly just call commit function
    logout: ({ commit }) => {
        // call setToken from mutations
        commit('setToken', null);
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