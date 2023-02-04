import axios from "axios";
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.message,
      ...error.response,
      ...error.response.data,
    });
  }
);

export const setAuthorizationHeader = (accessToken) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`);

export const deleteAuthorizationHeader = () =>
  client.defaults.headers.common["Authorization"];
export default client;
