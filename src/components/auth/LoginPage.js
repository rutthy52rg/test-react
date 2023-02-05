import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../commons/button/Button";
import Checkbox from "../commons/form/checkbox/Checkbox";
import Input from "../commons/form/input/Input";
import { useAuth } from "./ContextAuth";
import { login } from "./service";

const LoginPage = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savesession, setSaveSession] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const { isLogged } = useAuth();
  const { handleLogin: onLogin } = useAuth();
  //location de loginpage que al pasar por la url de navigate desde requireAuth la propiedad state con el pathname desde donde hemos accedido a login
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/adverts");
  }, [isLogged, navigate]);

  const handleChangeEmail = (e) => {
    e.preventDefault();
    // console.log("datos", username);
    setEmail(e.target.value);
  };
  const handleChangeUsePassword = (e) => {
    // console.log("datos", password);
    setPassword(e.target.value);
  };
  const handleChangeSaveSession = (e) => {
    setSaveSession(e.target.checked);
  };

  const resetError = () => {
    setError(null);
    setIsFetching(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      resetError();
      setIsFetching(true);
      await login({ email, password, savesession });
      onLogin();
      const to = location.state?.from?.pathname || "/";
      navigate(to, { replace: true });
    } catch (error) {
      setError(error);
    }

    //TODO guardar token en localstorage
  };
  const isDisabled = useMemo(() => {
    // console.log("enviando", isFetching);
    return !(email && password && !isFetching);
  }, [email, password, isFetching]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col s12 text-center">
          <h1
            className="text-center"
            style={{ margin: "0px auto", textAlign: "center" }}
          >
            Login Page
          </h1>
        </div>
      </div>
      <div className="row tex-center">
        <div>
          <form onSubmit={handleSubmit} className="row container">
            <Input
              label="email"
              name="email"
              type="text"
              onChange={handleChangeEmail}
              value={email}
              colsize="s12"
            />
            <Input
              label="password"
              name="password"
              type="password"
              onChange={handleChangeUsePassword}
              value={password}
              colsize="s12"
            />
            <Checkbox
              label="Guardar sesión"
              onChange={handleChangeSaveSession}
              value={savesession}
              colsize="s12"
            />
            <Button
              type="submit"
              value="Enviar"
              disabled={isDisabled}
              className="btn btn-large right"
              colsize="s12"
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
      {error ? (
        <div className="row mt-5 txt-center" onClick={resetError}>
          <div className="col s6 text-center">
            <div className="alert login-alert" role="alert">
              {error.message}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default LoginPage;
