import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import FormsPage from "./pages/forms/FormsPage";
import ResultsPage from "./pages/results/ResultsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "forms", element: <FormsPage /> },
      { path: "results", element: <ResultsPage /> },
    ],
  },
];
export default routes;
