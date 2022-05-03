import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import "./index.css";
import "./api";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
