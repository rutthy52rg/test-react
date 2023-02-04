import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PageContainerOutlet title="Listado de anuncios" {...props}>
      {adverts.length > 0 ? (
        <div className="container collection">
          {adverts.map((ele) => (
            <Advert {...ele} url={`/adverts/${ele.id}`} key={ele.id} />
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </PageContainerOutlet>
  );
};
export default AdvertsPage;
