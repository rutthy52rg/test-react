import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdvertDetailPage from "./components/adverts/AdvertDetailPage";
import AdvertsPage from "./components/adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import RequireAuthConsumer from "./components/auth/RequiredAuth";
import Layout from "./components/Layout/Layout";
const LoginPage = lazy(() => import("./components/auth/LoginPage"));

function App() {
  return (
    <Suspense fallback="loading page...">
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/adverts"
            element={
              <RequireAuthConsumer>
                <Layout />
              </RequireAuthConsumer>
            }
          >
            <Route path="" element={<AdvertsPage />} index />
            <Route path=":id" element={<AdvertDetailPage />} />
            <Route path="new" element={<NewAdvertPage />} />
          </Route>
          <Route path="/404" element={<div> 404 | not found </div>} />
          <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
