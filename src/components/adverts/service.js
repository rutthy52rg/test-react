import client from "../../api/client";
export const urlAdverts = "/api/v1/adverts";
// añadimos esta variable pq se va a repetir en todos los endpoints del metodo get. La clase client viene de la que hemos creado en api/client.js que a su vez conecta con .env donde tenemos el endpoint principal a la api =>  REACT_APP_API_BASE_URL = http://localhost:8000  ¡¡¡ .env => cliente.js => cada servicio.js !!!!

export const getLatestAdverts = () => {
  const url = urlAdverts;
  return client.get(url);
};

export const getAdvertDetail = (id) => {
  const url = `${urlAdverts}/${id}`;
  return client.get(url);
};

export const deleteAdvert = (id) => {
  const url = `${urlAdverts}/${id}`;
  return client.delete(url);
};
export const getAdversTags = () => {
  const url = `${urlAdverts}/tags`;
  return client.get(url);
};

export const createAdverts = (formData) => {
  const url = `${urlAdverts}`;
  return client.post(url, formData);
};
