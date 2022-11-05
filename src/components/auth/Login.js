import { useState } from "react";
import Button from "../common/button/Button";
import Input from "../common/form/input/Input";

const LoginPage = () => {
    const [currentUser, setNewUser] = useState([]);
    const [currentPass, setNewPass] = useState([]);
    const handleChangeUser = (event) => {
        setNewUser(event.target.value);
    }
    const handleChangePass = (event) => {
        setNewPass(event.target.value);
    }
    const handleClick = (event) => console.log(event);

    return (
        <form>
            <Input type="text" name="user" onChange={handleChangeUser}/>
            <Input type="password" name="password" onChange={handleChangePass} borderColor="#ff00ff"/>
            <Button onClick={handleClick} type="submit" variant="primary" radius="100px" >Enviar</Button>
        </form>
    )
};
export default LoginPage;