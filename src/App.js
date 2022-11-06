import LoginPage from "./components/auth/LoginPage";
import TweetsPage from "./components/tweets/TweetsPage";

function App() {
  return (
    <div className="App">
      <LoginPage></LoginPage>
      {/* <NewTweetPage></NewTweetPage> */}
      <TweetsPage></TweetsPage>
    </div>
  );
}

export default App;
