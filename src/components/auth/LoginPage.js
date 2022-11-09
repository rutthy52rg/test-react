import { useState } from "react";
import Button from "../common/button/Button";
import Input from "../common/form/input/Input";
import Layout from "../templates/Layout";
import "./LoginPage.css";

const LoginPage = () => {
  const [currentUser, setNewUser] = useState([]);
  const [currentPass, setNewPass] = useState([]);
  const handleChangeUser = (event) => {
    setNewUser(event.target.value);
    console.log(currentUser);
  };
  const handleChangePass = (event) => {
    setNewPass(event.target.value);
    console.log(currentPass);
  };
  const handleClick = (event) => {
    event.preventDefault();
    console.log(currentPass, currentUser);
  };

  return (
    <Layout
      title="Login"
      mainClassname="container"
      sectionSize="s8 auto-center"
    >
      <form className="row">
        <Input
          type="text"
          id="user"
          name="user"
          onChange={handleChangeUser}
          label="User"
          value={currentUser}
          className="validate"
          s
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
          className="waves-effect btn-small pink accent-2"
          colSize="s12"
          disabled={!(currentUser && currentPass) ? true : false}
        >
          Enviar
        </Button>
      </form>
    </Layout>
  );
};
export default LoginPage;
