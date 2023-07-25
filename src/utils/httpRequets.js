import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // baseMyAPI: process.env.REACT_APP_BASE_MYAPI,
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

// export const getAllVideo = async (path, options = {}) => {
//     const response = await request.get(path, options);
//     return response.data;
// };

export default request;
