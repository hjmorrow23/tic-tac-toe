import axios from 'axios';
import { get } from 'lodash';
import Auth from '../ducks/auth/actions';
import { getType } from 'typesafe-actions';
import Config from '../../config';

const axiosConfig = () => ({
    baseURL: Config.API_URL,
    timeout: 240 * 1000,
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export function getUploadFileConfig(onUploadProgress) {
    return {
        timeout: undefined,
        onUploadProgress,
        headers: {
            'Accept': null,
            'Content-Type': 'multipart/form-data'
        }
    };
}

class ApiBase {
    constructor() {
        this.client = axios.create(axiosConfig());
    }

    configApiForAuth() {
        this.client.defaults.headers.Authorization = `Bearer ${this.store.getState().auth.token}`;
    }
    
    initApi(store) {
        this.store = store
        this.client.interceptors.response.use(response => response, rejected => {
            const status = get(rejected, 'response.status', false);
            if (status === 401) {
                store.dispatch({ type: getType(Auth.logout) });
                return Promise.reject(rejected);
            }
        });
        store.subscribe(this.configApiForAuth.bind(this));
    }
}

export const apiBase = new ApiBase();
