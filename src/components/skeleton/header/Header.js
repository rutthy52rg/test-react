import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../../../assets/images/twitter-logo.svg";
import { useAuth } from "../../auth/ContextAuth";
import { logout } from "../../auth/service";
import "../../commons/alerts/alertPages.css";
import ConfirmButton from "../../commons/alerts/confirmButton";
import Button from "../../commons/button/Button";
import "./Header.css";

const Header = ({ headerlassname, colorTheme }) => {
  const { isLogged, handleLogout: onLogout } = useAuth();
  console.log(isLogged);
  const handleLogout = () => {
    logout();
    onLogout();
  };
  return (
    <header className={classNames("row", headerlassname)}>
      <nav className={`col s12 nav-extended`}>
        <div className="nav-wrapper">
          <div className="nav-list">
            <ul className="right">
              <li>
                <Link to="/">
                  <Icon width="30px" style={{ fill: "white" }}></Icon>
                </Link>
              </li>
              <li>
                <NavLink
                  to="/adverts/new"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  New Advert
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/adverts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end
                >
                  Adverts
                </NavLink>
              </li>
            </ul>
            <div className="user-info">
              {!isLogged ? (
                <Button to="/login">Login</Button>
              ) : (
                <ConfirmButton
                  as={Link}
                  doTask={handleLogout}
                  message="¿Estas seguro de quieres salir?"
                >
                  Logout
                </ConfirmButton>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
