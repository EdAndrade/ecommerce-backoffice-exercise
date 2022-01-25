import axios from 'axios';
import { admins } from './admins.js';
import { products } from './products.js';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})

export const API = {
    admins: admins(axiosInstance),
    products: products(axiosInstance)
}