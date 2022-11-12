import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

import classNames from "classnames";
const Layout = ({
  title,
  children,
  sectionclassname,
  mainclassname,
  layoutclassname,
  linkEvent,
  username,
  isLoged,
  ...props
}) => {
  // const [currentValue, setNewValue] = useState([]);
  // useEffect(() => {
  // }, []);
  return (
    <div className={classNames(layoutclassname)} {...props}>
      <Header
        headerlassname="header-flex"
        colorTheme="blue-grey"
        username={username}
        isLoged={isLoged}
        linkEvent={linkEvent}
      ></Header>
      <Main
        title={title}
        mainclassname={classNames(mainclassname)}
        sectionclassname={classNames(sectionclassname)}
      >
        {children}
      </Main>
      <Footer colorTheme="blue-grey"></Footer>
    </div>
  );
};
export default Layout;
