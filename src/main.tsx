import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import Providers from "./Providers.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";

// Definimos el enrutador que se encargará de realizar las rutas entre diferentes páginas
// y compoenentes
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      {/* Definimos el proveedor que gestiona el contexto para las rutas */}
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
