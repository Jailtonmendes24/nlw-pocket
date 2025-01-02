import axios from "axios";

export const api = axios.create({
  // baseURL: "http://192.168.1.7:3333",
  baseURL: "http://192.168.70.117:3333",
  timeout: 700,
});
