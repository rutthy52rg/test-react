import client, {
  deleteAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/localStorage";

export const login = (credentials) => {
  return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (credentials.savesession) storage.set("auth", accessToken);
  });
};

export const logout = () => {
  deleteAuthorizationHeader();
  storage.remove("auth");
};
