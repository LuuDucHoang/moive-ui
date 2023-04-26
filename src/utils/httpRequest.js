import axios from 'axios';

const request = axios.create({
    // baseURL: 'https://api.themoviedb.org/3/',
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export default request;
