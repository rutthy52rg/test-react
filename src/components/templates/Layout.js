import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

import classNames from "classnames";
const Layout = ({ title, children, className }) => {
  // const [currentValue, setNewValue] = useState([]);
  // useEffect(() => {
  // }, []);
  return (
    <div className={classNames(className)}>
      <Header className="header-flex" colorTheme="blue-grey"></Header>
      <Main title={title}>{children}</Main>
      <Footer colorTheme="blue-grey"></Footer>
    </div>
  );
};
export default Layout;
