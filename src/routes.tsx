import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
];
export default routes;
