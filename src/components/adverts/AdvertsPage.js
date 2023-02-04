import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../adverts/AdvertsPage.module.css";
import Button from "../commons/button/Button";
import PageContainerOutlet from "../skeleton/PageContainerOutlet";
import Advert from "./Advert";
import { getLatestAdverts } from "./service";

//plantilla a renderizar
const EmptyList = () => (
  <div>
    <p> No hay ningún anuncio. Crea el primero</p>
    <Button as={Link} to="/adverts/new" variant="primary">
      Crear tweet
    </Button>
  </div>
);

export const AdvertsPage = ({ ...props }) => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts()
      .then((adverts) => {
        setAdverts(adverts);
        setAdverts([]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PageContainerOutlet title="Listado de anuncios" {...props}>
      <div className={!adverts.length ? styles.empty : styles.list}>
        {adverts.length > 0 ? (
          <ul>
            {adverts.map((ele) => (
              <li key={ele.id}>
                <Link to={`/adverts/${ele.id}`}>
                  <Advert {...ele} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </PageContainerOutlet>
  );
};
export default AdvertsPage;
