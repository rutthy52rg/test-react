import { useEffect, useState } from "react";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Layout from "../skeleton/Layout";
import { getLatestTweets } from "./service";
const TweetsPage = ({ username, isLoged }) => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getLatestTweets().then((tweets) => setTweets(tweets));
  }, []);

  return (
    <Layout
      title="listado de tweets"
      mainClassname="container"
      sectionSize="s12"
      username={username}
      isLoged={isLoged}
    >
      {tweets.length ? (
        tweets.map((ele) => (
          <Card
            key={ele.id}
            description={ele.content}
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
export default TweetsPage;
