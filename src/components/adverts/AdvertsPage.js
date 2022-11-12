import { useState } from "react";
import Storage from "../../utils/Storage";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Layout from "../skeleton/Layout";
import { getLatestAdverts } from "./service";

const AdvertsPage = ({ username, isLoged, linkEvent }) => {
  const [adverts, setAdverts] = useState([]);
  const accessToken = Storage.getStorage("auth");
  console.log(accessToken);

  getLatestAdverts().then(() => setAdverts(adverts));

  return (
    <Layout
      title="listado de tweets"
      mainClassname="container"
      sectionSize="s12"
      username={username}
      isLoged={isLoged}
      linkEvent={linkEvent}
    >
      {adverts.length ? (
        adverts.map((ele) => (
          <Card
            key={ele.id}
            description={ele.name}
            colSize="s3"
            alt="imagen"
            image="https://materializecss.com/images/office.jpg"
          />
        ))
      ) : (
        <Button>añade tweet</Button>
      )}
    </Layout>
  );
};
export default AdvertsPage;
