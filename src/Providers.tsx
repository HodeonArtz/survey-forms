import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./translation/i18next.ts";

// Como utilizamos la librería Mantine para la parte de UI,
// podemos definir el tema junto a los colores y fuente que queramos
const mantineTheme = createTheme({
  fontFamily: "Open Sans",
  headings: {
    fontFamily: "Epilogue",
    fontWeight: "600",
  },
  primaryColor: "violet",
});

// Componente utilizado para brindar proveedores a todo el proyecto y
// gestionar los contextos que se necesiten con las librerías usadas
const Providers = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  // Cambiamos el lenguaje de la página al que utiliza el usuario en su navegador
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
};

export default Providers;
