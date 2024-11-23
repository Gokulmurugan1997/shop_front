import axios from 'axios'

let AxiosService = axios.create({
    baseURL:"https://shop-back-ioot.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService