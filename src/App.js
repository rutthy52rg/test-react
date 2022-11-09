import { useState } from "react";
import "./App.css";
import LoginPage from "./components/auth/LoginPage";
import TweetsPage from "./components/tweets/tweetsPage";
function App() {
  const [isLoged, setLogedState] = useState(false);
  const [username, setUsername] = useState("");

  // ? onLoginEvent es la prop que viene del componente LoginPage que pasamos por props. A esta prop le pasamos por valor el evento hadleEvent que a su vez ejecuta la función setLoginState para cambiar useState
  const handleEvent = (username) => {
    setLogedState(true);
    setUsername(username);
  };
  console.log(isLoged, username);
  return (
    <div className="App">
      {isLoged ? (
        <TweetsPage isLoged={isLoged} username={username}></TweetsPage>
      ) : (
        <LoginPage onLoginEvent={handleEvent}></LoginPage>
      )}
      {/* <NewTweetPage></NewTweetPage> */}
    </div>
  );
}

export default App;
