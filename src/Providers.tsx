import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const mantineTheme = createTheme({
  fontFamily: "Open Sans",
  headings: {
    fontFamily: "Epilogue",
    fontWeight: "600",
  },
});

const Providers = ({ children }: { children: ReactNode }) => {
  return <MantineProvider theme={mantineTheme}>{children}</MantineProvider>;
};

export default Providers;
