import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";

const InfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const handleClick = () => {
    navigate("/adverts");
  };
  return (
    <div className="not-found-page">
      <h1>
        {location.state.message.message
          ? location.state.message.message
          : location.state.message
          ? location.state.message
          : location.state === null
          ? "error desconocido"
          : ""}
      </h1>
      <Button onClick={handleClick}>Close</Button>
    </div>
  );
};
export default InfoPage;
