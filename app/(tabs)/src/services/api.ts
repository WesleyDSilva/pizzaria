import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.172:8082'
})

export{api};