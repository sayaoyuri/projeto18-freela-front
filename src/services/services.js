import axios from "axios";

export const createUser = async (body) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const login = async (body) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
    .then(res => res.data)
    .catch(error => error.response.data);
};