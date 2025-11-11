import { createBrowserRouter } from "react-router";
import Landing from "../modules/landing/Landing";
import SignUp from "../modules/signup/SignUp";
import SignIn from "../modules/signin/SignIn";
import Home from "../modules/home/Home";
import NotFoundPage from "../modules/404/NotFound";
import Protected from "./protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFoundPage />
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
    element: <Protected />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

export default router;