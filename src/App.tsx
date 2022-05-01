import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styles from "./App.module.scss";
import RequireAuth from "./hoc/RequireAuth";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <div className={styles.App}>
      <RecoilRoot>
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
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};

export default App;
