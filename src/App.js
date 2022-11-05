import LoginPage from "./components/auth/Login";
import NewTweetPage from "./components/tweets/NewTweetPage";
import TweetsPage from "./components/tweets/TweetsPage";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <NewTweetPage></NewTweetPage>
      <TweetsPage></TweetsPage>
    </div>
  );
}

export default App;
