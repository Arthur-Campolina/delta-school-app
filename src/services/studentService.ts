import { AxiosRequestConfig } from "axios";
import { API } from "./api";

const BASE_PATH = "/students";

export const StudentService  ={
    findAll: (params?: AxiosRequestConfig) => {
        return API.get(BASE_PATH, params);
    },
    findById: (id: number, params?: AxiosRequestConfig) => {
        return API.get(`${BASE_PATH}/${id}`, params);
    },
    create: (data: any, params?: AxiosRequestConfig) => {
        return API.post(BASE_PATH, data, params);
    },
    update: (id: number, data: any, params?: AxiosRequestConfig) => {
    return API.put(`${BASE_PATH}/${id}`, data, params);
    },
    delete: (id: number, params?: AxiosRequestConfig) => {
        return API.delete(`${BASE_PATH}/${id}`, params);
    }
}