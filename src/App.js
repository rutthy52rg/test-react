import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdvertDetailPage from "./components/adverts/AdvertDetailPage";
import AdvertsPage from "./components/adverts/AdvertsPage";
import NewAdvertsPage from "./components/adverts/NewAdvertsPage";
import { ContextAuthProvider } from "./components/auth/ContextAuth";
import LoginPage from "./components/auth/LoginPage";
import RequiredAuth from "./components/auth/RequiredAuth";
import { getUser, Logout } from "./components/auth/serviceLogin";

function App({ initialLoged }) {
  const [isLoged, setLogedState] = useState(initialLoged);
  const [username, setUsername] = useState();

  const getUsername = async () => {
    try {
      const currentUser = await getUser();
      setUsername(currentUser.username);
    } catch (error) {
      // console.log(error);
    }
  };
  // ? onLoginEvent es la prop que viene del componente LoginPage que pasamos por props. A esta prop le pasamos por valor el evento hadleEvent que a su vez ejecuta la función setLoginState para cambiar useState
  const handleLogin = async () => {
    setLogedState(true);
    await getUsername();
  };
  const handleLogout = async (e) => {
    setLogedState(false);
    await Logout();
  };

  useEffect(() => {
    if (isLoged) {
      getUsername();
    }
  }, [username, isLoged]);

  // console.log(isLoged);
  return (
    <div className="App">
      <ContextAuthProvider
        value={{ isLoged, handleLogin, username, handleLogout }}
      >
        <Routes>
          <Route
            path="/login"
            element={
              isLoged ? (
                <Navigate to="/adverts" />
              ) : (
                <LoginPage onLoginEvent={handleLogin}></LoginPage>
              )
            }
          />
          <Route
            path="/adverts"
            element={
              <RequiredAuth isLoged={isLoged}>
                <AdvertsPage></AdvertsPage>
              </RequiredAuth>
            }
          />
          <Route
            path="/adverts/:id"
            element={
              <RequiredAuth isLoged={isLoged}>
                <AdvertDetailPage></AdvertDetailPage>
              </RequiredAuth>
            }
          />
          <Route
            path="/adverts/new"
            element={
              <RequiredAuth isLoged={isLoged}>
                <NewAdvertsPage></NewAdvertsPage>
              </RequiredAuth>
            }
          />
          <Route
            path="/"
            element={
              isLoged ? <Navigate to="/adverts" /> : <Navigate to="/login" />
            }
          />
          <Route path="/404" element={<div> 404 | not found </div>} />
          <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
      </ContextAuthProvider>
    </div>
  );
}

export default App;
