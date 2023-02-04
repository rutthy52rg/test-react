import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmButton from "../commons/alerts/confirmButton";
import PageContainerOutlet from "../skeleton/PageContainerOutlet";
import Advert from "./Advert";
import "./adverts.css";
import { deleteAdvert, getAdvertDetail } from "./service";

const AdvertDetailPage = ({
  name,
  sale,
  price,
  tags,
  photo,
  confirm,
  isLoading,
  ...props
}) => {
  const [advert, setAdvert] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const onDelete = async () => {
    try {
      await deleteAdvert(id).then(navigate("/adverts"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getAdvertDetail(id)
        .then((advert) => {
          setAdvert(advert);
        })
        .catch((error) => {
          if (error.status === 404) {
            const to = "/404";
            navigate(to);
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [id, navigate]);

  return (
    <PageContainerOutlet title="detalle de anuncoio" {...props}>
      <div className="container advert-content-detail">
        <Advert {...advert} />
        <ConfirmButton
          confirmation="Are you sure?"
          doTask={onDelete}
          disabled={isLoading}
          message="¿Estas seguro de eliminar?"
        >
          Delete
        </ConfirmButton>
      </div>
    </PageContainerOutlet>
  );
};
export default AdvertDetailPage;
