import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Auth from "./routes/auth";
import Home from "./routes/home";
import Dashboard from "./routes/Dashboard";
import { action as LogoutAction, tokenLoader } from "./routes/utils";
import "react-toastify/dist/ReactToastify.css";
import User from "./routes/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/logout",
        action: LogoutAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
