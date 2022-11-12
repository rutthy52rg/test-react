import classNames from "classnames";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../../../assets/images/twitter-logo.svg";
import ContextAuth from "../../auth/ContextAuth";
import ActionLink from "../../common/actionLink/ActionLink";
import "./Header.css";

const Header = ({ headerlassname, colorTheme }) => {
  const {
    isLoged,
    handleLogout: linkEvent,
    username,
  } = useContext(ContextAuth);
  return (
    <header className={classNames("row", headerlassname)}>
      <nav className={`col s12 ${colorTheme}`}>
        {/* <img src={logo} width="30px"/> */}
        <div>
          <Link to="/">
            <Icon width="30px" style={{ fill: "white" }}></Icon>
          </Link>
          {isLoged ? (
            <NavLink
              to="/adverts/new"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              New Advert
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            to="/adverts"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Adverts
          </NavLink>
        </div>

        {isLoged ? (
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
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};
export default Header;
