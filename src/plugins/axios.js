import axios from 'axios';
import { BaseApiURL } from '../_variables.js';

const MyAxios = axios.create({
    baseURL: BaseApiURL,
    timeout: 10000
});

export default MyAxios;