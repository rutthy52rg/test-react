import logo, { ReactComponent as Icon } from "../../../assets/images/twitter-logo.svg;";
import Button from "../../common/button/Button";

const Header = () => {
    //const [currentValue, setNewValue] = useState([]);
    //useEffect(() => {
    //setNewValue(currentValue);
    //.then((currentValue) => setNewValue(currentValue));
    //}, []);
    return (
        <header>
            <img src={logo} /> 
            <Icon></Icon>
            <nav></nav>
            <Button radius="20px" disabled primary>hola espero que escribas </Button>
        </header>
    )
};
export default Header;