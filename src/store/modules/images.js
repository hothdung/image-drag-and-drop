/* eslint-disable no-unused-vars */
import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

// complicated logic comes in here
const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        // first data is attached by axios
        commit('setImages', response.data.data);
    },
    async uploadImages({ commit }, images) {
        // do not work with whole event object
        console.log(images);
    }
};

// mostly small in nature
const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}