import axios from "axios";
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
// ?axios me devuelve un objeto con muchas cosas sobre la respuesta de la api, para sacar de ahí sólo los datos, la propiedad que axios nos da es data, así que interceptamos la respuesta y sacamos unicamente data para no tener que usar data en otras solicitudes de datos ¡¡¡¡(ver service.js)!!!!

// ?usamos axios también para pasar por parámetro en al cabecera de la peticion el método de autorización que nos indique la doc de la api en cuestion, lo llamares después en los SERVICIOS O EN EL COMPONENTE!!!!
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
export default client;
