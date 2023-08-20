import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import RootPage from "./Pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
