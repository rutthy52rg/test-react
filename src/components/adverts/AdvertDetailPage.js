import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../auth/ContextAuth";
import Card from "../common/card/Card";
import Layout from "../skeleton/Layout";
import { getAdvertDetail } from "./service";

const AdvertDetailPage = ({ ...props }) => {
  const { isLoged, handleLogout: linkEvent, username } = useAuth();
  const [currentAdvert, setCurrentAdvert] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAdvertDetail(id)
      .then((resp) => setCurrentAdvert(resp))
      .catch((err) => {
        if (err.status === 404) {
          navigate("404");
        }
      });
  }, [id, navigate]);
  const currentObjCard = {
    image: currentAdvert.photo,
    booleantag: currentAdvert.sale,
    booleanlabeltrue: "sale",
    booleanlabelfalse: "buy",
    title: currentAdvert.name,
    date: currentAdvert.createdAt,
    alt: currentAdvert.name,
    icon1: "more_vert",
    icon2: "close",
    text1: currentAdvert.price,
    textarray: currentAdvert.tags,
    link1: "/adverts",
    labellink1: "Back to List Adverts",
    link2: "/delete",
    labellink2: "Delete",
  };
  console.log(currentObjCard);
  return (
    <Layout
      title="advert detail"
      mainclassname="container"
      sectionclassname="s12"
      username={username}
      isLoged={isLoged}
      linkEvent={linkEvent}
      {...props}
    >
      <Card
        {...currentObjCard}
        colsize="s12"
        imageHeight="600px"
        imageAlign="center"
        iconSize="600px"
      />
    </Layout>
  );
};
export default AdvertDetailPage;
