import { AppShell, Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import BrandLogo from "./components/layout/BrandLogo";
import ThemeModeButton from "./components/layout/ThemeModeButton";
import Links from "./components/navbar/Links";
import { Footer } from "./components/footer/Footer";
import LanguageToggler from "./components/LanguageToggler";

// Este componente se utilizará para renderizarse en todas las rutas en las que vayamos
const Layout = () => {
  // Estas variables nos permitirán gestionar los estados para la parte responsive del layout
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          {/* En esta caja tendremos los botones para abrir un navbar y podremos ver tambien
            el título de la página en todo momento
          */}
          <Group h="100%" gap="lg">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <BrandLogo />
          </Group>
          <Group gap="xs">
            {/* Estos botones se encargarán de cambiar el idioma y cambiar la apariencia de la página */}
            <LanguageToggler />
            <ThemeModeButton />
          </Group>
        </Group>
      </AppShell.Header>
      {/* En este navbar podremos ver los enlaces que hemos definido con las rutas */}
      <AppShell.Navbar pt="sm">
        <Stack gap={0}>
          <Links />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack>
          <Container mih="60vh">
            {/* Aquí irá el contenido que se renderizará el componente asignada a la ruta actual */}
            <Outlet />
          </Container>
          <Footer />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
