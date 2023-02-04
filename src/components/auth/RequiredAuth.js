import { Navigate } from "react-router-dom";
import { useAuth } from "./ContextAuth";

export const RequireAuth = ({ children }) => {
  //con hook
  const { isLogged } = useAuth();
  // const from = useLocation();
  // console.log("dfad", from, isLogged);
  if (!isLogged) {
    //pasamos por parámetro la propiedad state de navigate con una propiedad que lleva el path de location luego se verá en el state de location desde donde se utilice
    return <Navigate to="/login" /*state={{ from: from }}*/ />;
  }
  return children;
};

export default RequireAuth;
