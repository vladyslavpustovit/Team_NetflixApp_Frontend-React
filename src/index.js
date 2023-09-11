import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import App from "./components/App/App";
import {AuthProvider} from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AuthProvider>
        <App/>
      </AuthProvider>
  </React.StrictMode>
);
