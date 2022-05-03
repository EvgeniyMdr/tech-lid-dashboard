import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import NotSignPage from "./hoc/NotSignPage";
import RequireAuth from "./hoc/RequireAuth";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <div>main</div>
              </RequireAuth>
            }
          />
          <Route
            path="login"
            element={
              <NotSignPage>
                <Login />
              </NotSignPage>
            }
          />
          <Route
            path="registration"
            element={
              <NotSignPage>
                <Registration />
              </NotSignPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
