import { createBrowserRouter } from "react-router";
import Landing from "../modules/landing/Landing";
import SignUp from "../modules/signup/SignUp";
import SignIn from "../modules/signin/SignIn";
import Home from "../modules/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/home",
    element: <Home />
  }
]);

export default router;