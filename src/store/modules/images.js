/* eslint-disable no-unused-vars */
import api from '../../api/imgur';
import { router } from '../../main';

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
    async uploadImages({ rootState }, images) {
        // do not work with whole event object

        // Get access token
        const { token } = rootState.auth;

        // Call our API to do upload: imgur file

        await api.uploadImages(images, token);

        // redirect our user to ImageList component: list of images
        router.push('/');

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