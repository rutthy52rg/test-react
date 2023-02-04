import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../commons/Button";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import Advert from "./Advert";
import styles from "./AdvertsPage.module.css";
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
    // const excuteAsync = async () => {
    //   tweets = await getLatestTweets();
    //   setTweets(tweets);
    // };
    // excuteAsync();

    getLatestAdverts()
      .then((adverts) => {
        setAdverts(adverts);
        // setTweets([]);
      })
      .catch((error) => console.log(error));

    // getLatestTweets().then((tweets) => {
    //   console.log(tweets);
    //interceptus desde api/client, si no sería tweets.data
    //   setTweets(tweets);
    // });
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
