import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.88.83/api",
  baseURL: "https://thepowerprogress.com/backend/api",
});


export default instance;


export const imgBaseUrl = "http://192.168.88.83";
