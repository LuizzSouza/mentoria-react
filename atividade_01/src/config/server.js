import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";


export const server = axios.create({
  baseURL: 'https://floating-forest-46361.herokuapp.com',
});

server.interceptors.request.use(async(config) => {
  try {
    const cookies = parseCookies();
    const token = cookies['token'];
    // const token = await sessionStorage.getItem("token");

    if(token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});