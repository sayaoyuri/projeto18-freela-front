import axios from "axios";

export const createUser = async (body) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body)
    .then(res => res)
    .catch(error => error);
};

export const login = async (body) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
    .then(res => res)
    .catch(error => error);
};

export const categories = async () => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/products/categories`)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const createProduct = async (token, body) => {
  const config = { headers: { Authorization: token } };
  console.log(config)

  return await axios.post(`${import.meta.env.VITE_API_URL}/products/new`, body, config)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const getProduct = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const getProducts = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    .then(res => res.data)
    .catch(error => error.response.data);
};

