import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const InfoPage = ({ message }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/adverts");
  };
  return (
    <div className="not-found-page">
      <h1>{message}</h1>
      <Button onClick={handleClick}>Close</Button>
    </div>
  );
};
export default InfoPage;
