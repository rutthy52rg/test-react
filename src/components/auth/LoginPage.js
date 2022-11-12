import { useState } from "react";
import Button from "../common/button/Button";
import Checkbox from "../common/form/checkbox/Checkbox";
import Form from "../common/form/Form";
import Input from "../common/form/input/Input";
import Layout from "../skeleton/Layout";
import "./LoginPage.css";
import { login } from "./serviceLogin";

const LoginPage = ({ onLoginEvent }) => {
  // !username y password tienen que llamarse igual que se pide en la api, porque lo que manda es un string con este nombre de variables

  const [email, setNewUser] = useState("");
  const [password, setNewPass] = useState("");
  const [isCheck, setNewChecked] = useState(false);
  const [error, setNewError] = useState(null);
  const [waitignReset, setWaitingReset] = useState(false);

  const handleChangeUser = (e) => {
    setNewUser(e.target.value);
  };
  const handleChangePass = (e) => {
    setNewPass(e.target.value);
  };
  const handleChangeChecked = (e) => {
    setNewChecked(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      resetError();
      setWaitingReset(false);
      await login({ email, password });
      onLoginEvent(email, isCheck); //puede ser then(onLoginEvent) si no tienes que pasarle parametros
    } catch (error) {
      setNewError(error);
      setWaitingReset(true);
    }
  };
  const resetError = () => {
    setNewError(null);
  };

  return (
    <Layout
      title="Login"
      mainClassName="container auto-center"
      sectionClassName="s12"
    >
      <Form formClassName="row" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="email"
          name="email"
          label="Email"
          colSize="s12"
          required
          onChange={handleChangeUser}
          value={email}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          colSize="s12"
          required
          onChange={handleChangePass}
          value={password}
        />
        <Checkbox
          type="checkbox"
          name="session"
          id="session"
          label="Session"
          colSize="s12"
          ckecked={isCheck}
          onChange={handleChangeChecked}
          inputMargin="200px"
        />
        <Button
          type="submit"
          radius="20px"
          className="waves-effect btn-small pink accent-2"
          colSize="s12"
          disabled={ email && password && !waitignReset ? true : false}
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
