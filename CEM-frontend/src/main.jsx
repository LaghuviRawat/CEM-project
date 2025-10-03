import React from "react";
import ReactDOM from "react-dom/client";
import IndexRouter from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>
);
