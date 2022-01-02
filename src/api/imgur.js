import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '2dadbc47b43c0c1';
const ROOT_URL = 'https://api.imgur.com';


export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        // navigate user to this url
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token) {
        // imgur api just upload images one at a time thats why looping over list
        // array of promises --> each represents image upload
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
        // waits for every promise to be resolved before we are done
        // takes array of promises --> when all promises are resolved --> Promise.all will be resolved, as well & function will continue
        return Promise.all(promises);
    }
}