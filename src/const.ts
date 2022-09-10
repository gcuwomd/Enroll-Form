import axios from "axios";

export const baseUrl = "http://120.24.240.172:8088/api/";

const conf = {
  baseURL: baseUrl,
  timeout: 3000,
  Headers: {},
};
export const baseAxios = axios.create(conf);

export function toBase64(file: File | Blob) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    let base64Str: any = "";
    reader.readAsDataURL(file);
    reader.onload = () => {
      base64Str = reader.result;
    };
    reader.onloadend = () => {
      resolve(base64Str)
    }
  });
}
