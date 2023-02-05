import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../commons/button/Button";
import Input from "../commons/form/input/Input";
import Select from "../commons/form/select/Select";
import PageContainerOutlet from "../skeleton/PageContainerOutlet";
import Advert from "./Advert";
import { getAdversTags, getLatestAdverts } from "./service";

//plantilla a renderizar
const EmptyList = () => (
  <div className="">
    <p> No hay ningún anuncio. Crea el primero</p>
    <Button as={Link} to="/adverts/new" className="btn">
      Crear tweet
    </Button>
  </div>
);

export const AdvertsPage = ({ ...props }) => {
  const [adverts, setAdverts] = useState([]);
  const [advertsFiltered, setAdvertsFiltered] = useState([]);
  const [inputPrice, setInputPrice] = useState(300);
  const [inputName, setInputName] = useState("");
  const [inputSale, setInputSale] = useState("Todo");
  const [inputTags, setInputTags] = useState([]);
  const [tagsOpt, setTagsOpt] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const navigate = useNavigate();
  const optSale = ["Todo", "Venta", "Compra"];

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const handleRange = (e) => {
    setInputPrice(e.target.value);
  };

  const handleChangeSelect = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    const newValue = [...value];
    setInputTags(newValue);
  };

  const handleChangeSale = (e) => {
    let target = e.target;
    let value = target.value;
    console.log(value);
    setInputSale(value);
  };

  const handleSubmit = (e) => {
    setAdvertsFiltered(adverts);
    e.preventDefault();
    let dataValue = {};
    dataValue = {
      name: inputName,
      tags: inputTags,
      price: inputPrice,
      sale: inputSale,
    };

    console.log(dataValue);
    let result = adverts
      .filter(filterByName(dataValue.name))
      .filter(filterByTags(dataValue.tags))
      .filter(filterByPrice(dataValue.price))
      .filter(filterBySale(dataValue.sale));
    setAdvertsFiltered(result);
  };

  const filterByTags =
    (filter) =>
    ({ tags }) =>
      !filter.length || filter.every((tag) => tags.includes(tag));

  const filterByPrice =
    (filter) =>
    ({ price }) => {
      if (!filter.length) {
        return true;
      }
      return price <= filter;
    };

  const filterByName =
    (filter) =>
    ({ name }) => {
      const cleanFilter = filter.trim();
      return !cleanFilter || new RegExp(cleanFilter, "gi").test(name);
    };

  const filterBySale =
    (filter) =>
    ({ sale }) => {
      if (filter === "Todo") {
        return true;
      }
      if (filter === "Venta") {
        return sale;
      }
      if (filter === "Compra") {
        return !sale;
      }
    };

  useEffect(() => {
    const execute = async () => {
      try {
        const adverts = await getLatestAdverts();
        setAdverts(adverts);
        console.log(adverts);
        const tags = await getAdversTags();
        setTagsOpt(tags);
        setAdvertsFiltered(adverts);
        setIsFiltering(false);
      } catch (error) {
        if (error.statusCode === 401) {
          navigate("/login");
        }
        if (error.statusCode === 404) {
          navigate("/404", { state: { message: error.statusCode } });
        }
        navigate("/404", { state: { message: error } });
      }
    };
    execute();
  }, [navigate]);

  return (
    <PageContainerOutlet title="Listado de anuncios" {...props}>
      <form
        className="row container"
        style={{
          marginBottom: "100px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          label="Name"
          name="name"
          colsize="s4"
          onChange={handleChangeName}
          value={inputName}
        />
        <Select
          optionarray={tagsOpt}
          name="selectedTags"
          label="Tags"
          onChange={handleChangeSelect}
          value={inputTags}
          colsize="s4"
          multiple
        ></Select>
        <Select
          optionarray={optSale}
          name="sale"
          label="sale"
          onChange={handleChangeSale}
          value={inputSale}
          colsize="s4"
        ></Select>
        <Input
          type="range"
          onChange={handleRange}
          name="price"
          label={inputPrice}
          value={inputPrice}
          colsize="s12"
          max="300"
          style={{ marginBottom: "30px" }}
        />

        <Button
          type="submit"
          value="Enviar"
          className="btn right"
          disabled={isFiltering}
        >
          Filtrar
        </Button>
      </form>
      {advertsFiltered.length > 0 ? (
        <div
          className="container collection col s12"
          style={{ marginTop: "100px" }}
        >
          {advertsFiltered.map((ele) => (
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
