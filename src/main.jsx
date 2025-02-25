import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopProvider from "./Context/ShopContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>  
      <App />
    </ShopProvider>
  </React.StrictMode>
);




