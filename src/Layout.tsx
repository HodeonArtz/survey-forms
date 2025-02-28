import { AppShell, Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import BrandLogo from "./components/layout/BrandLogo";
import ThemeModeButton from "./components/layout/ThemeModeButton";
import Links from "./components/navbar/Links";

const Layout = () => {
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
          <ThemeModeButton />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar pt="sm">
        <Stack gap={0}>
          <Links />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Container>Footer</Container>
      </AppShell.Footer>
    </AppShell>
  );
};

export default Layout;
