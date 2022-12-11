import axios, { AxiosRequestConfig } from "axios";


export const BASE_URL = 'https://deltaschoolapi-production.up.railway.app'
// export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';


export const API = {
    get: (url: string, config?: AxiosRequestConfig) => {
        return axios({ method: 'GET', baseURL: BASE_URL, url, ...config })
    },
    post: (url: string, data: any, config?: AxiosRequestConfig) => {
        return axios({ method: 'POST', baseURL: BASE_URL, url, data, ...config })
    },
    put: (url: string, data: any, config?: AxiosRequestConfig) => {
        return axios({ method: 'PUT', baseURL: BASE_URL, url, data, ...config })
    },
    delete: (url: string, config?: AxiosRequestConfig) => {
        return axios({ method: 'DELETE', baseURL: BASE_URL, url, ...config })
    }
}

// const UsuarioService = {
//     findAll:
//         React.useEffect(() => {
//             axios.get(`${BASE_URL}/students/`).then((response) => {
//                 setStudentsList(response.data.content);
//             });
//         }, []),

//     findById:
//         React.useEffect(() => {
//             axios.get(`${BASE_URL}/students/${studentId}`).then((response) => {
//                 setStudentsList(response.data.content);
//             });
//         }, [studentId]),

//     update:
//         React.useEffect(() => {
//             axios.post(`${BASE_URL}/students/${studentId}`).then((response) => {
//                 setStudentsList(response.data.content);
//             });
//         }, [studentId]),

//     delete:
//         React.useEffect(() => {
//             axios.delete(`${BASE_URL}/students/${studentId}`).then((response) => {
//                 setStudentsList(response.data.content);
//             });
//         }, [studentId])
// }


// React.useEffect(() => {
//     axios.get(`${BASE_URL}/students/${studentId}`).then((response) => {
//       setStudentsList(response.data.content);
//     });
//   }, [studentId]);

//   React.useEffect(() => {
//     axios.post(`${BASE_URL}/students/${studentId}`).then((response) => {
//       setStudentsList(response.data.content);
//     });
//   }, [studentId]);

//   React.useEffect(() => {
//     axios.delete(`${BASE_URL}/students/${studentId}`).then((response) => {
//       setStudentsList(response.data.content);
//     });
//   }, [studentId]);




