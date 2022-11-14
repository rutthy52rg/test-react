import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/ContextAuth";
import Button from "../common/button/Button";
import Checkbox from "../common/form/checkbox/Checkbox";
import Form from "../common/form/Form";
import InputField from "../common/form/input/InpuField";
import Input from "../common/form/input/Input";
import Select from "../common/form/select/Select";
import Layout from "../skeleton/Layout";
import { createAdverts, getAdversTags } from "./service";

const NewAdvertsPage = ({ ...props }) => {
  const { username } = useAuth();
  const [currentName, setNewName] = useState("");
  const [currentPrice, setNewPrice] = useState("");
  const [isSale, setNewisSale] = useState(false);
  const [currentTags, setNewCurrentTags] = useState([]);
  const [currentImage, setNewImage] = useState();
  const [waitignReset, setWaitingReset] = useState(false);
  const [error, setNewError] = useState(null);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const execute = async () => {
      try {
        const tags = await getAdversTags();
        setTags(tags);
      } catch (error) {
        setNewError(error);
      }
    };
    execute();
  }, []);

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangePrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleChangeIsSale = (e) => {
    setNewisSale(e.target.checked);
  };
  const handleChangeSelect = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    // console.log("value", value);
    setNewCurrentTags(value);
  };

  const handleChangeImage = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("name", currentName);
    bodyFormData.append("price", currentPrice);
    bodyFormData.append("sale", isSale);
    bodyFormData.append("tags", currentTags);
    if (currentImage) {
      bodyFormData.append("photo", currentImage);
    }

    try {
      resetError();
      setWaitingReset(true);
      await createAdverts(bodyFormData).then(() => navigate("/adverts"));
    } catch (error) {
      setNewError(error);
      setWaitingReset(false);
    }
  };

  // console.log('newadverts',tags);
  const resetError = () => {
    //mensajes de error
    setNewError(false);
  };

  const isButtonEnabled = useMemo(() => {
    return currentName && currentPrice && currentTags.length && !waitignReset;
  }, [currentName, currentPrice, currentTags, waitignReset]);
  // console.log("siSale", isSale);
  return (
    <Layout
      title="Create advert"
      mainclassname="container auto-center"
      sectionclassname="s12"
      username={username}
    >
      <Form formClassName="row" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          name="name"
          label="Name"
          colsize="s12"
          required
          onChange={handleChangeName}
          value={currentName}
        />
        <Input
          type="number"
          name="price"
          label="Price"
          colsize="s12"
          required
          onChange={handleChangePrice}
          value={currentPrice}
        />
        <InputField
          label="Photo"
          colsize="s6"
          placeholder="Upload photo"
          onChange={handleChangeImage}
          value={currentImage}
        />
        <Select
          optionarray={tags}
          colsize="s6"
          label="Tags"
          required
          onChange={handleChangeSelect}
          value={currentTags}
          placeholder="Upload photo here"
        ></Select>
        <Checkbox
          type="checkbox"
          name="sale"
          id="sale"
          label="sale"
          colsize="m12"
          checked={isSale}
          onChange={handleChangeIsSale}
          inputmargin="200px"
        />
        <Button
          type="submit"
          radius="20px"
          className="waves-effect btn-small pink accent-2"
          colsize="s12"
          disabled={!isButtonEnabled}
          margin="40px 0"
        >
          Enviar
        </Button>
      </Form>
      {error ? <div onClick={resetError}> {error.message}</div> : ""}
    </Layout>
  );
};
export default NewAdvertsPage;
