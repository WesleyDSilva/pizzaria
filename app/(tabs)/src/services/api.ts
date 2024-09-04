import axios from "axios";

const api = axios.create({
    //baseURL: 'http://192.168.0.172:8082'
    //baseURL: 'http://localhost:8081'
   // baseURL: 'http:// 192.168.0.172:3333'
  //baseURL: 'https://api.github.com/users/WesleyDSilva/repos'
  
  //baseURL: 'https://my-json-server.typicode.com/WesleyDSilva/api_teste/session'
  // baseURL: 'https://run.mocky.io/v3/934daab8-c528-40f5-adac-c60921691cf9'
   
   baseURL: 'https://api.jsonbin.io/v3/qs/66d37504ad19ca34f89df7bb'
   
})

export{api};