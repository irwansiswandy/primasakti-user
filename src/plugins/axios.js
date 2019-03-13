import axios from 'axios';
import { BaseApiURL } from '../_variables.js';

const MyAxios = axios.create({
    headers: {
        'PrimasaktiUI': 'user'
    },
    baseURL: BaseApiURL,
    timeout: 10000
});

export default MyAxios;