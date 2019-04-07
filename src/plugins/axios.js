import { BaseApiURL } from '../_variables.js';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const MyAxios = axios.create({
    axiosRetry: {
    	retry: 3,
    	retryDelay: 1000
    },
    baseURL: BaseApiURL,
    timeout: 10000
});

export default MyAxios;