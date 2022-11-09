import client from "../../api/client";
const urlTweets = "/api/tweets"; // añadimos esta variable pq se va a repetir en todos los endpoints del metodo get. La clase client viene de la que hemos creado en api/client.js que a su vez conecta con .env donde tenemos el endpoint principal a la api =>  REACT_APP_API_BASE_URL = http://localhost:8000  ¡¡¡ .env => cliente.js => cada servicio.js !!!!

export const getLatestTweets = () => {
  const url = urlTweets;
  return client.get(url);
};
