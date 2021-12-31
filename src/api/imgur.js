import qs from 'qs';

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
    }
}