import axios from "axios";

export const api = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:3000/api/v1",
});