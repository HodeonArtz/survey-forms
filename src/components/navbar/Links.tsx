import { DefaultMantineColor, NavLink } from "@mantine/core";
import {
  Icon,
  IconChartHistogram,
  IconClipboardText,
  IconHome,
  IconProps,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface NavLinkData {
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  href: string;
  description?: string;
  color?: DefaultMantineColor;
}

const Links = () => {
  const { t } = useTranslation();

  // Hacemos un mapeo de las rutas para asignarle a cada su label, la ruta en sí, su icono y color
  const navLinks: NavLinkData[] = [
    {
      label: t("routes.home.label"),
      href: "/",
      icon: IconHome,
      color: "indigo",
    },
    {
      label: t("routes.surveys.label"),
      description: t("routes.surveys.description"),
      href: "/surveys",
      icon: IconClipboardText,
      color: "violet",
    },
    {
      label: t("routes.results.label"),
      description: t("routes.results.description"),
      href: "/results",
      icon: IconChartHistogram,
      color: "lime",
    },
  ];

  // utilizamos el hook de useLocation para más tarde saber en qué ruta estamos
  const { pathname } = useLocation();

  // guardamos en una variable y mostramos los enlaces a cada ruta en el componente
  const links = navLinks.map(({ href, label, description, color, ...item }) => (
    <NavLink
      to={href}
      component={Link}
      active={href === pathname}
      label={label}
      description={description}
      leftSection={item.icon && <item.icon size={16} stroke={1.5} />}
      color={color}
      key={crypto.randomUUID()}
    />
  ));
  return <>{links}</>;
};

export default Links;
