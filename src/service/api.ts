import axios from "axios";

const api = axios.create({
  baseURL: "https://busca-mao.herokuapp.com/",
});

export default api;