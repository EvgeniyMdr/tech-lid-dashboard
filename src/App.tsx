import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import NotSignPage from "./hoc/NotSignPage";
import RequireAuth from "./hoc/RequireAuth";
import { routes } from "./constants/routes";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          {routes.map((el) => {
            const element = el.private ? (
              <RequireAuth>
                <>
                  <Header />
                  {el.component}
                </>
              </RequireAuth>
            ) : (
              <NotSignPage>{el.component}</NotSignPage>
            );
            return <Route path={el.path} element={el.component}></Route>;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
