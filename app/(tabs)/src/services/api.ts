import axios from "axios";

const api = axios.create({
    //baseURL: 'http://192.168.0.172:8082'
    //baseURL: 'http://localhost:8081'
    baseURL: 'http:// 192.168.0.172:3333'
   
})

export{api};