import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../commons/button/Button";
import Checkbox from "../commons/form/checkbox/Checkbox";
import Form from "../commons/form/Form";
import InputField from "../commons/form/input/InpuField";
import Input from "../commons/form/input/Input";
import Select from "../commons/form/select/Select";
import { createAdverts, getAdversTags } from "./service";

const NewAdvertPage = ({ ...props }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState(false);
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState();
  const [tagsOpt, setTagsOpt] = useState([]);
  const navigate = useNavigate();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePrice = (e) => setPrice(e.target.value);
  const handleChangeSale = (e) => setSale(e.target.checked);
  const handleChangeSelect = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setTags(value);
  };

  const handleChangeImage = (e) => {
    setPhoto(e.target.files[0]);
  };
  const validPrice = (price) => price > 0 && !Number.isNaN(price);
  const validTags = (tags) => !!tags.length;
  console.log(validPrice(price), validTags(tags));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("price", price);
    bodyFormData.append("sale", sale);
    bodyFormData.append("tags", tags);
    if (photo) {
      bodyFormData.append("photo", photo);
    }
    console.log(bodyFormData.values);
    try {
      const advert = await createAdverts(bodyFormData);
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

  useEffect(() => {
    const execute = async () => {
      try {
        const optTags = await getAdversTags();
        setTagsOpt(optTags);
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

  const isDisabled = useMemo(() => {
    return !!(name && validPrice(price) && validTags(tags));
  }, [name, price, tags]);
  return (
    <Form formClassName="row container" onSubmit={handleSubmit}>
      <h1>Alta de anuncio</h1>
      <Input
        type="text"
        id="name"
        name="name"
        label="Name"
        colsize="s12"
        required
        onChange={handleChangeName}
        value={name}
      />
      <Input
        type="number"
        name="price"
        label="Price"
        colsize="s12"
        required
        onChange={handleChangePrice}
        value={price}
      />
      <InputField
        label="Photo"
        colsize="s6"
        placeholder="Upload photo"
        onChange={handleChangeImage}
        value={photo}
      />
      <Select
        optionarray={tagsOpt}
        colsize="s6"
        label="Tags"
        required
        onChange={handleChangeSelect}
        value={tags}
        placeholder="Upload photo here"
        multiple
      ></Select>
      <Checkbox
        type="checkbox"
        name="sale"
        id="sale"
        label="sale"
        colsize="m12"
        checked={sale}
        onChange={handleChangeSale}
        inputmargin="200px"
      />
      <Button
        type="submit"
        className="waves-effect btn-large right"
        colsize="s12"
        disabled={!isDisabled}
        margin="50px 0"
      >
        Enviar
      </Button>
    </Form>
  );
};
export default NewAdvertPage;
