import axios from "axios";

const apiVersion = import.meta.env.VITE_API_VERSION;
const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: `${apiUrl}/${apiVersion}`,
  timeout: 5000
})
