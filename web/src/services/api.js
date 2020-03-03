import axios from "axios"; // biblioteca que faz o contato com a API que queremos

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
