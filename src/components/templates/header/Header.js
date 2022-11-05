import { ReactComponent as Icon } from "../../../assets/images/twitter-logo.svg";
import Button from "../../common/button/Button";

const Header = () => {
    //const [currentValue, setNewValue] = useState([]);
    //useEffect(() => {
    //setNewValue(currentValue);
    //.then((currentValue) => setNewValue(currentValue));
    //}, []);
    return (
        <header>
           {/* <img src={logo} width="30px"/> */}
            <Icon width="30px"></Icon>
            <nav></nav>
            <Button radius="20px" disabled primary> Login </Button>
        </header>
    )
};
export default Header;