import classNames from "classnames";
import { ReactComponent as Icon } from "../../../assets/images/twitter-logo.svg";
import ActionLink from "../../common/actionLink/ActionLink";
import Button from "../../common/button/Button";
import "./Header.css";

const Header = ({ className, colorTheme, username, isLoged, linkEvent }) => {
  // console.log("header", username, isLoged);
  return (
    <header className={classNames("row", className)}>
      <nav className={`col s12 ${colorTheme}`}>
        {/* <img src={logo} width="30px"/> */}
        <Icon width="30px" style={{ fill: "white" }}></Icon>
        {!isLoged ? (
          <Button
            radius="20px"
            colorTheme="#e91e63"
            className="pink btn-small"
            onClick={(e) => console.log("button")}
          >
            Login
          </Button>
        ) : (
          <div className="flex-valign-center">
            <span>Hola {username} </span>
            <ActionLink
              icon="exit_to_app"
              tag="Logout"
              colorTheme="#e91e63"
              haveIcon
              hoverColor="#ffffff"
              linkEvent={linkEvent}
            />
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
