import { createBrowserRouter } from "react-router";

import SignIn from "../modules/sigin/SignIn";
import SignUp from "../modules/signup/SignUp";
import Landing from "../modules/landing/Landing";
import Home from "../modules/home/Home";
import NotFoundPage from "../modules/404/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <Home/>
  },

])

export default router;