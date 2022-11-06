import { useState } from "react";
import Button from "../common/button/Button";
import Input from "../common/form/input/Input";
import Layout from "../templates/Layout";

const LoginPage = () => {
  const [currentUser, setNewUser] = useState([]);
  const [currentPass, setNewPass] = useState([]);
  const handleChangeUser = (event) => {
    setNewUser(event.target.value);
  };
  const handleChangePass = (event) => {
    setNewPass(event.target.value);
  };
  const handleClick = (event) => console.log(event);

  return (
    <Layout title="Login">
      <form className="container">
        <Input
          type="email"
          id="user"
          name="user"
          onChange={handleChangeUser}
          label="Email"
          value={currentUser}
          className="validate"
          colSize="s12"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          className="validate"
          onChange={handleChangePass}
          colSize="s12"
          value={currentPass}
        />
        <Button
          onClick={handleClick}
          type="submit"
          radius="20px"
          className="btn-small pink accent-2"
        >
          Enviar
        </Button>
      </form>
    </Layout>
  );
};
export default LoginPage;
