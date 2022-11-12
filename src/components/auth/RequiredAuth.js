import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ isLoged, children }) => {
  const location = useLocation();
  if (!isLoged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export default RequiredAuth;
