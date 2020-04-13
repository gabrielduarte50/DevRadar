import axios from "axios";

const api = axios.create({
  baseURL: "http://150.164.234.97:3333" // varia, tem que olhar isso dieirot
});

export default api;
