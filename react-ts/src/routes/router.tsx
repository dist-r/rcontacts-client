import { createBrowserRouter } from "react-router";

import SignIn from "../modules/sigin/SignIn";
import SignUp from "../modules/signup/SignUp";
import Landing from "../modules/landing/Landing";
import Home from "../modules/home/Home";
import NotFoundPage from "../modules/404/NotFoundPage";
import RouteLayout from "./RouteLayout";
import ErrorPage from "../modules/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  },

])

export default router;