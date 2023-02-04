import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageContainerOutlet from "../Layout/PageContainerOutlet";
import { getAdvert } from "./service";

const AdvertDetailPage = ({ ...props }) => {
  const [advert, setAdvert] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  //avisar cuando se desmonta el componente
  // const unmountedRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getAdvert(id)
        .then((advert) => {
          // if (unmountedRef.current) {
          //   //no setees el estado si el componente se ha desmontado
          //   return;
          // }
          setAdvert(advert);
        })
        .catch((error) => {
          // console.log("error", error);
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
  // useEffect(() => {
  //   return () => {
  //     unmountedRef.current = true;
  //     //componente desmontado pasamos a true
  //   };
  // }, []);

  return (
    <PageContainerOutlet title="detalle de anuncoio" {...props}>
      <p>
        advert id : {id} {JSON.stringify(advert)}
      </p>
    </PageContainerOutlet>
  );
};
export default AdvertDetailPage;
