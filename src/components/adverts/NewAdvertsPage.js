import { useContext } from "react";
import ContextAuth from "../auth/ContextAuth";
import Layout from "../skeleton/Layout";

const NewAdvertsPage = ({ ...props }) => {
  const {
    isLoged,
    handleLogout: linkEvent,
    username,
  } = useContext(ContextAuth);
  return (
    <Layout
      title="new advert"
      mainclassname="container"
      sectionclassname="s12"
      username={username}
      isLoged={isLoged}
      linkEvent={linkEvent}
      {...props}
    >
      test new tweet
    </Layout>
  );
};
export default NewAdvertsPage;
