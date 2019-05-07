import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aps-billy-api.herokuapp.com/api'
});

export default api;