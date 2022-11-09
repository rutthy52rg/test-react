import client, { setAuthorizationHeader } from "../../api/client";
const urlLogin = "/auth/login";
export const login = (userCredentials) => {
  const url = urlLogin;
  return client
    .post(url, userCredentials)
    .then(({ accessToken }) => setAuthorizationHeader(accessToken)); // ? pasamos la autorización por cabecera después que se resuelva la promesa cada vez que llamamos a este método (viene de client.js => método que tiene axios) /Tambien se puede hacer directamente en el componente (ejem. en loginPage.js => login({ username, password }).then(({response}) => setAuthorizationHeader(response));).
};
