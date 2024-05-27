import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500' // must be same name baseURL
});