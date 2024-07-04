import React from "react";
import ReactDOM from "react-dom/client";
import  { Toaster } from 'react-hot-toast';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#ededeb] ">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  </React.StrictMode>
);
