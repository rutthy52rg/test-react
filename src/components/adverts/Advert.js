import { Link } from "react-router-dom";
import "./adverts.css";

const Advert = ({ name, price, photo, tags, sale, url }) => {
  return (
    <Link to={url} className="collection-item">
      <div className="container-data">
        <p className="container-photo">
          {photo ? <img src={photo} className="photo" alt={name} /> : ""}
        </p>
        <p className="name">{name}</p>

        <p className="tags">{tags}</p>
      </div>
      <div className="container-actions">
        <p>{price} €</p>
        <span className={`badge ${sale ? "sale" : "buy"}`}>
          {sale ? "Venta" : "Compra"}
        </span>
      </div>
    </Link>
  );
};
export default Advert;
