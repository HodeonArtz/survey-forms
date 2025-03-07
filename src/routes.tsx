import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SurveysPage from "./pages/surveys/SurveysPage";
import ResultsPage from "./pages/results/ResultsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "surveys", element: <SurveysPage /> },
      { path: "results", element: <ResultsPage /> },
    ],
  },
];
export default routes;
