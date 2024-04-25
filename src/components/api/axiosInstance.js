// axiosBaseQuery.js
// import axios from 'axios';

// export const axiosBaseQuery = ({ baseUrl }) => async ({ url, method, body }) => {
//   try {
//     const response = await axios({
//       method,
//       url: baseUrl + url,
//       data: body,
//     });
//     return { data: response.data };
//   } catch (error) {
//     // Handle error
//     return {
//       error: { status: error.response?.status, data: error.response?.data },
//     };
//   }
// };

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    "Content-Type": "application/json",
    // Add any other headers or configurations you need
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// export default axiosInstance;

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers, body }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        // body,
      });
      return Promise.resolve(result);
    } catch (axiosError) {
      return Promise.reject(axiosError?.response?.data); // Should return in this format only, becasuse in order to populate error from axios interceptor "return response.data"
    }
  };

export default axiosBaseQuery;