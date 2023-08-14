import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Auth from "./Pages/Auth";
import User from "./Pages/User";
import Root from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "root",
    loader: tokenLoader, ////TODO
    children: [
      { index: true, element: <Home /> },
      {
        path: "user",
        element: <User />,
        loader: checkAuthLoader, /////TODO
      },
      {
        path: "login",
        element: <Auth />,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction, /////TODO
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
