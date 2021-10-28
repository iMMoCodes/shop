import axios from 'axios';
// import Cookies from 'js-cookie'

// const BASE_URL = 'https://immostore.herokuapp.com/api/v1/';
const BASE_URL = 'http://localhost:5000/api/v1/';
// const TOKEN = Cookies.get('jwt')

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
