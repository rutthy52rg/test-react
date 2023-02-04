import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ ...props }) => {
  return (
    <div>
      <Header {...props} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
