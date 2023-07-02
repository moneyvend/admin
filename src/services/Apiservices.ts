import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
export const ApiService = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 19000,
  headers:{
    "Content-Type": "application/json",
    "Authorization": "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZnVsbG5hbWUiOiJOeW9ueWludG9ubyBJc2FhYyIsImVtYWlsIjoiaXNhYWNwaXR3YTI1NisyQGdtYWlsLmNvbSIsInN0YXR1cyI6IkFjdGl2ZSIsImVtYWlsVmVyaWZpZWQiOnRydWUsImlhdCI6MTY4ODMxNjY2NywiZXhwIjoxNjg4MzIzODY3fQ.2Ucczu1lERjBQbDoZCwE1bLScdgJUUve1U2peqGL4vw",
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
