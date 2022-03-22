import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok-phake.herokuapp.com/',
})

export default instance