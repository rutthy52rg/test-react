import T, { string } from "prop-types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../commons/Button";
import CheckBox from "../commons/Checkbox";
import FormField from "../commons/FormField";
import InputFile from "../commons/InputFile";
import Select from "../commons/Select";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import { createAdvert } from "./service";

const NewAdvertPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState(true);
  const [tags, setTags] = useState([]);
  const [image, setPhoto] = useState(null);
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePrice = (e) => setPrice(e.target.value);
  const handleChangeIsSale = (e) => setSale(e.target.checked);
  const handleTagsChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    // console.log("value", value);
    setTags(value);
  };

  const handleImageChange = (e) => setPhoto(e.target.files[0]);
  const validPrice = (price) => price > 0 && !Number.isNaN(price);
  const validTags = (tags) => !!tags.length;
  console.log(validPrice(price), validTags(tags));

  const navigate = useNavigate();
  // const { nameRef, saleRef, priceRef } = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const advertObj = {
      name,
      sale,
      price,
      tags,
      image,
    };

    try {
      const advert = await createAdvert({ ...advertObj });
      navigate(`/adverts/${advert.id}`);
    } catch (error) {
      if (error.statusCode === 401) {
        navigate("/login");
      }
      if (error.statusCode === 404) {
        navigate("/404");
      }
    }
  };

  const arrOpt = ["moto", "coche", "camion"];
  const isDisabled = useMemo(() => {
    return !!(name && validPrice(price) && validTags(tags));
  }, [name, price, tags]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PageContainerOutlet title="Nuevo Anuncio">
          <FormField
            label="nombre"
            name="name"
            value={name}
            onChange={handleChangeName}
            type="text"
          />
          <FormField
            type="number"
            label="precio"
            name="price"
            value={price}
            onChange={handleChangePrice}
          />
          <CheckBox value={sale} tag="Venta" onChange={handleChangeIsSale} />
          <Select
            name="tags"
            value={tags}
            label="selecciona transporte"
            options={arrOpt}
            onChange={handleTagsChange}
            multiple={true}
          />

          <InputFile name="photo" onChange={handleImageChange} />
        </PageContainerOutlet>
        <Button type="submit" value="Enviar" disabled={!isDisabled}>
          Enviar
        </Button>
      </form>
    </div>
  );
};
NewAdvertPage.propTypes = {
  buttonEnabled: T.func,
};
NewAdvertPage.defaultProps = {
  content: string,
};

export default NewAdvertPage;
