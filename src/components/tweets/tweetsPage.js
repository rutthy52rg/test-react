import { useEffect, useState } from "react";
import Button from "../common/button/Button";
import Layout from "../templates/Layout";
import { getLatestTweets } from "./service";

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getLatestTweets().then((tweets) => setTweets(tweets));
  }, []);

  return (
    <Layout title="listado de tweets">
      <ul>
        {tweets.length ? (
          tweets.map((ele) => <li key={ele.id}>{ele.content}</li>)
        ) : (
          <Button>añade tweet</Button>
        )}
      </ul>
    </Layout>
  );
};
export default TweetsPage;
