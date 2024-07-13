import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // adjust to your backend API URL
});

export default api;