import axios from "axios";

export const baseUrl = "http://localhost:3527/";

const conf = {
    baseURL: baseUrl,
    timeout: 3000,
    Headers:{}
}
export const baseAxios = axios.create(conf);