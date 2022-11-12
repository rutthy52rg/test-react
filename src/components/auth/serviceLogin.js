import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import Storage from "../../utils/Storage";
const urlLogin = "/api/auth/login";
export const login = (userCredentials) => {
  const url = urlLogin;
  return client.post(url, userCredentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken); // ? pasamos la autorización por cabecera después que se resuelva la promesa cada vez que llamamos a este método (viene de client.js => método que tiene axios) /Tambien se puede hacer directamente en el componente (ejem. en loginPage.js => login({ username, password }).then(({response}) => setAuthorizationHeader(response));).
    // console.log(accessToken);
    Storage.setStorage("auth", accessToken);
  });
};

const urlUser = "/api/auth/me";
export const getUser = () => {
  const url = urlUser;
  // console.log(client.get(url));
  return client.get(url);
};

export const Logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    Storage.removeStorage("auth");
  });
};
