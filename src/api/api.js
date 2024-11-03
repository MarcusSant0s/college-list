import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
};
