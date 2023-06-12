import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
export const ApiService = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 19000,
  headers:{
    "Content-Type": "application/json",
    "Authorization": "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZnVsbG5hbWUiOiJOeW9ueWludG9ubyBJc2FhYyIsImVtYWlsIjoiaXNhYWNwaXR3YTI1NisyQGdtYWlsLmNvbSIsInN0YXR1cyI6IkFjdGl2ZSIsImVtYWlsVmVyaWZpZWQiOnRydWUsImlhdCI6MTY4NjYwNDEyMywiZXhwIjoxNjg2NjExMzIzfQ.TpRZcuK1dcfTb1O2xMZFlQ_ODSt_tLTY2IrMET4Pgy0",
  }
});

ApiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  async (error: any) => {
    return await Promise.reject(error);
  }
);

ApiService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    return await Promise.reject(error);
  }
);
