import axios from 'axios';
import { admins } from './admins.js';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

export const API = {
    admins: admins(axiosInstance)
}