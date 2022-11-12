import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContextAuth from "../auth/ContextAuth";
import CardDetail from "../common/cardDetail/CardDetail";
import Layout from "../skeleton/Layout";
import { getAdvertDetail } from "./service";
const AdvertDetailPage = ({ ...props }) => {
  const {
    isLoged,
    handleLogout: linkEvent,
    username,
  } = useContext(ContextAuth);
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
      <CardDetail {...currentAdvert} advertags={currentAdvert.tags} />
    </Layout>
  );
};
export default AdvertDetailPage;
