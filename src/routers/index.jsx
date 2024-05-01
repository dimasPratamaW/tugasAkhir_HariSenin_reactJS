import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import FAQPage from "../pages/FAQ";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },


]);
