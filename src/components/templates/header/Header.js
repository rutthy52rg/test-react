import classNames from "classnames";
import { ReactComponent as Icon } from "../../../assets/images/twitter-logo.svg";
import Button from "../../common/button/Button";
import "./header.css";

const Header = ({ className, colorTheme }) => {
  // const [anchorElUser, setAnchorElUser] = useState(null);
  // useEffect(() => {
  // }, []);

  return (
    <header className={classNames("row", className)}>
      <nav className={`col s12 ${colorTheme}`}>
        {/* <img src={logo} width="30px"/> */}
        <Icon width="30px" style={{ fill: "white" }}></Icon>
        <Button
          radius="20px"
          bgcolor="#000000"
          className="pink btn-small"
          onClick={(e) => console.log(e)}
        >
          {" "}
          Login{" "}
        </Button>
      </nav>
    </header>
  );
};
export default Header;
