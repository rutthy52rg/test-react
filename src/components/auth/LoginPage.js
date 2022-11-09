import { useState } from "react";
import Button from "../common/button/Button";
import Form from "../common/form/Form";
import Input from "../common/form/input/Input";
import Layout from "../templates/Layout";
import "./LoginPage.css";
import { login } from "./serviceLogin";

const LoginPage = ({ onLoginEvent }) => {
  // !username y password tienen que llamarse igual que se pide en la api, porque lo que manda es un string con este nombre de variables

  const [username, setNewUser] = useState("");
  const [password, setNewPass] = useState("");
  const handleChangeUser = (event) => {
    setNewUser(event.target.value);
  };
  const handleChangePass = (event) => {
    setNewPass(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    login({ username, password }).then(() => onLoginEvent(username)); //puede ser then(onLoginEvent) si no tienes que pasarle parametros
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
          id="user"
          name="user"
          label="User"
          colSize="s12"
          className="validate"
          required
          onChange={handleChangeUser}
          value={username}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          colSize="s12"
          className="validate"
          required
          onChange={handleChangePass}
          value={password}
        />
        <Button
          // onClick={handleClick}
          type="submit"
          radius="20px"
          className="waves-effect btn-small pink accent-2"
          colSize="s12"
          disabled={!(username && password) ? true : false}
        >
          Enviar
        </Button>
      </Form>
    </Layout>
  );
};
export default LoginPage;
