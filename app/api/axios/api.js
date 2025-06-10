import axios from "axios";
const api = axios.create({
    baseURL: 'http://10.100.23.26:8080'
})

export default api;