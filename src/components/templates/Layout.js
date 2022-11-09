import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

import classNames from "classnames";
const Layout = ({
  title,
  children,
  sectionClassName,
  mainClassName,
  layoutClassName,
  username,
  isLoged,
}) => {
  // const [currentValue, setNewValue] = useState([]);
  // useEffect(() => {
  // }, []);
  return (
    <div className={classNames(layoutClassName)}>
      <Header
        className="header-flex"
        colorTheme="blue-grey"
        username={username}
        isLoged={isLoged}
      ></Header>
      <Main
        title={title}
        mainClassName={classNames(mainClassName)}
        sectionClassName={sectionClassName}
      >
        {children}
      </Main>
      <Footer colorTheme="blue-grey"></Footer>
    </div>
  );
};
export default Layout;
