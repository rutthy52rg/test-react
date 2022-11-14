import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/ContextAuth";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Filter from "../common/filter/Filter";
import Input from "../common/form/input/Input";
import Select from "../common/form/select/Select";
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
  const { isLoged, handleLogout: linkEvent, username } = useAuth();
  const [adverts, setAdverts] = useState([]);
  const [tags, setTags] = useState([]);
  const [error, setNewError] = useState(null);
  const [currentSearch, setNewSearch] = useState("");
  const [searchParams] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [price, setNewPrice] = useState(0);

  const handleSearch = (e) => {
    setNewSearch(e.target.value);
  };
  const handleRange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setFilterParam(e.target.value);
  };

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

  const search = (items) => {
    // eslint-disable-next-line
    return items.filter((item) => {
      if (item.price > parseInt(price, 10)) {
        if (item.tags == filterParam) {
          return searchParams.some((newItem) => {
            return (
              item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(currentSearch.toLowerCase()) > -1
            );
          });
        } else if (filterParam == "All") {
          return searchParams.some((newItem) => {
            return (
              item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(currentSearch.toLowerCase()) > -1
            );
          });
        }
      }
    });
  };

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
      <Filter className="col s12">
        <Input
          type="text"
          label="Search"
          colsize="s6"
          onChange={handleSearch}
          value={currentSearch}
        />
        <Select
          optionarray={tags}
          colsize="s6"
          onChange={handleFilterSelect}
          value={filterParam}
        />
        <Input
          type="range"
          onChange={handleRange}
          label={price}
          value={price}
          colsize="s12"
          min="0"
          max="5000"
        />
      </Filter>
      <div className="row">
        {isLoged ? (
          adverts.length ? (
            search(adverts).map((ele) => (
              <Card
                colsize="s4"
                icon1="more_vert"
                icon2="close"
                key={ele.id}
                icon="close"
                image={ele.photo}
                title={ele.name}
                alt="imagen"
                text1={ele.price}
                textarray={ele.tags}
                link1={ele.id}
                labellink1="See more"
                booleantag={ele.sale}
                booleanlabeltrue="buy"
                booleanlabelfalse="sale"
                imageHeight="200px"
                cardHeight="max-content"
                imageAlign="center"
                iconSize="200px"
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
      </div>
    </Layout>
  );
};
export default AdvertsPage;
