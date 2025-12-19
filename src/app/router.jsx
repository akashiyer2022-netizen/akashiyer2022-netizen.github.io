import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AboutUs from "../pages/AboutUs";

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <AboutUs /> }, // temporary: home goes to About
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);
