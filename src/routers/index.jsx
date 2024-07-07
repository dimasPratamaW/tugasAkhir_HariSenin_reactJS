import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/index.jsx";
import FAQPage from "../pages/FAQ/index.jsx";
// import LoginPage from "../pages/Auth/login";
import POSPage from "../pages/POS/index.jsx";
import LoginPage from '../pages/Auth/login.jsx'
import RegisterPage from '../pages/Auth/register.jsx'
import ErrorPage from '../pages/Auth/errorPage.jsx'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  {
    path: "/pos",
    element: <POSPage />,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  }
]);
