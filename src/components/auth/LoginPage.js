import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import Checkbox from "../common/form/checkbox/Checkbox";
import Form from "../common/form/Form";
import Input from "../common/form/input/Input";
import Layout from "../skeleton/Layout";
import { useAuth } from "./ContextAuth";
import "./LoginPage.css";
import { login } from "./serviceLogin";

const LoginPage = ({ onLoginEvent }) => {
  // !username y password tienen que llamarse igual que se pide en la api, porque lo que manda es un string con este nombre de variables
  const { username } = useAuth();
  const [email, setNewUser] = useState("");
  const [password, setNewPass] = useState("");
  const [isCheck, setNewChecked] = useState(false);
  const [error, setNewError] = useState(null);
  const [waitignReset, setWaitingReset] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeUser = (e) => {
    setNewUser(e.target.value);
  };
  const handleChangePass = (e) => {
    setNewPass(e.target.value);
  };
  const handleChangeChecked = (e) => {
    setNewChecked(e.target.checked);
    console.log("login check", isCheck);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      resetError();
      setWaitingReset(true);
      await login({ email, password });
      onLoginEvent(email, isCheck); //puede ser then(onLoginEvent) si no tienes que pasarle parametros
      const to = location.state?.from?.pathname || "/";
      navigate(to, { replace: true });
    } catch (error) {
      setNewError(error);
      setWaitingReset(false);
    }
  };
  const resetError = () => {
    //mensajes de error
    setNewError(false);
  };

  return (
    <Layout
      title="Login"
      mainclassname="container auto-center"
      sectionclassname="s12"
      username={username}
    >
      <Form formClassName="row" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="email"
          name="email"
          label="Email"
          colsize="s12"
          required
          onChange={handleChangeUser}
          value={email}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          colsize="s12"
          required
          onChange={handleChangePass}
          value={password}
        />
        <Checkbox
          type="checkbox"
          name="session"
          id="session"
          label="Session"
          colsize="s12"
          checked={isCheck}
          onChange={handleChangeChecked}
          inputMargin="200px"
        />
        <Button
          type="submit"
          radius="20px"
          className="waves-effect btn-small pink accent-2"
          colsize="s12"
          disabled={email && password && !waitignReset ? false : true}
          margin="40px 0"
        >
          Enviar
        </Button>
      </Form>
      {error ? <div onClick={resetError}> {error.message}</div> : ""}
    </Layout>
  );
};
export default LoginPage;
