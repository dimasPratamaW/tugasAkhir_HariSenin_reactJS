import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import FAQPage from "../pages/FAQ";
import LoginPage from "../pages/Auth/login";
import POSPage from "../pages/POS";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/pos",
    element: <POSPage />,
  },


]);
