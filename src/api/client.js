import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
//axios me devuelve un objeto con muchas cosas sobre la respuesta de la api, para sacar de ahí sólo los datos, la propiedad que axios nos da es data, así que interceptamos la respuesta y sacamos unicamente data para no tener que usar data en otras solicitudes de datos ¡¡¡¡(ver service.js)!!!!
client.interceptors.response.use(respons => respons.data)

export default client;