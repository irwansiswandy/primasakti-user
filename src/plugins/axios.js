import { BaseApiURL } from '../_variables.js';
import axios from 'axios';
import axiosRetry from 'axios-retry';

function defaultHeaders() {
    let headers = {};
    headers['X-PS-UI'] = 'user';
    return headers;
}

const MyAxios = axios.create({
    axiosRetry: {
    	retry: 3,
    	retryDelay: 1000
    },
    baseURL: BaseApiURL,
    timeout: 20000,
    headers: defaultHeaders()
});

axiosRetry(MyAxios, {
    retries: 2,
    retryDelay: () => {
        return 1000;
    }
});

export default MyAxios;