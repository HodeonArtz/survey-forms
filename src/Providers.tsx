import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./translation/i18next.ts";

const mantineTheme = createTheme({
  fontFamily: "Open Sans",
  headings: {
    fontFamily: "Epilogue",
    fontWeight: "600",
  },
});

const Providers = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

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
