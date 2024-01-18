import axios from "axios";
const API = axios.create({
  baseURL: "https://bootcamp-rent-cars.herokuapp.com/",
});

export const fetchPosts = () => API.get(`/customer/car`);
export const fetchPostsById = (id) => API.get(`/customer/car/${id}`);
