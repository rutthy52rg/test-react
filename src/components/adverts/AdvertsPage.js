import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContextAuth from "../auth/ContextAuth";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Layout from "../skeleton/Layout";
import { getAdversTags, getLatestAdverts } from "./service";

const EmptyList = () => (
  <div className="flex auto-center" style={{ margin: "5vh auto" }}>
    <h6>Crea tu primer anuncio</h6>
    <Button
      as={Link}
      to="/adverts/new"
      className="waves-effect waves-effect btn-small"
      radius="20px"
      colortheme="#e91e63"
    >
      Añadir anuncio
    </Button>
  </div>
);

const AdvertsPage = () => {
  const {
    isLoged,
    handleLogout: linkEvent,
    username,
  } = useContext(ContextAuth);

  const [adverts, setAdverts] = useState([]);
  const [tags, setTags] = useState([]);
  const [error, setNewError] = useState(null);
  useEffect(() => {
    const execute = async () => {
      try {
        const adverts = await getLatestAdverts();
        const tags = await getAdversTags();
        setAdverts(adverts);
        setTags(tags);
      } catch (error) {
        setNewError(error);
      }
    };
    execute();
  }, []);

  const resetError = () => {
    //mensajes de error
    setNewError(false);
  };

  return (
    <Layout
      title="listado de tweets"
      mainclassname="container"
      sectionclassname="s12"
      username={username}
      isLoged={isLoged}
      linkEvent={linkEvent}
    >
      <p> {tags ? tags.map((tg, idx) => <span key={idx}>{tg} |</span>) : ""}</p>
      {isLoged ? (
        adverts.length ? (
          adverts.map((ele) => (
            <Card
              key={ele.id}
              title={ele.name}
              colSize="s3"
              alt="imagen"
              photo={ele.photo}
              price={ele.price}
              linkDetail={ele.id}
              advertags={ele.tags}
            />
          ))
        ) : (
          <EmptyList />
        )
      ) : error ? (
        <div onClick={resetError}> {error.message}</div>
      ) : (
        ""
      )}
    </Layout>
  );
};
export default AdvertsPage;
