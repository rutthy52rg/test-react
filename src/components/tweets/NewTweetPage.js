import Layout from "../templates/Layout";

const NewTweetPage = (username, isLoged) => {
  //const [currentValue, setNewValue] = useState([]);
  //useEffect(() => {
  //setNewValue(currentValue);
  //.then((currentValue) => setNewValue(currentValue));
  //}, []);
  return (
    <div>
      <Layout title="new tweet" username={username} isLoged={isLoged}>
        test new tweet
      </Layout>
    </div>
  );
};
export default NewTweetPage;
