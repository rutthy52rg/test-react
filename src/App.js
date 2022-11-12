import { useState } from "react";
import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import Storage from "./utils/Storage";
function App({ initialLoged, isCheck }) {
  const [isLoged, setLogedState] = useState(initialLoged);
  const [username, setUsername] = useState("");

  // ? onLoginEvent es la prop que viene del componente LoginPage que pasamos por props. A esta prop le pasamos por valor el evento hadleEvent que a su vez ejecuta la función setLoginState para cambiar useState
  const handleEvent = (username) => {
    setLogedState(true);
    setUsername(username);
  };
  const handleClick = (e) => {
    setLogedState(false);
    Storage.removeStorage("auth");
  };

  return (
    <div className="App">
      {isLoged ? (
        <AdvertsPage
          isLoged={isLoged}
          username={username}
          linkEvent={handleClick}
        ></AdvertsPage>
      ) : (
        <LoginPage onLoginEvent={handleEvent}></LoginPage>
      )}
      {/* <NewTweetPage></NewTweetPage> */}
    </div>
  );
}

export default App;
