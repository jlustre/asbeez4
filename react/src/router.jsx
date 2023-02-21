import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./components/layouts/GuestLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Dashboard from "./pages/dashboard";
import Surveys from "./pages/surveys";
import Login from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
