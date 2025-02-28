import { DefaultMantineColor, NavLink } from "@mantine/core";
import {
  Icon,
  IconChartHistogram,
  IconClipboardText,
  IconHome,
  IconProps,
} from "@tabler/icons-react";
import { t } from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavLinkData {
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  href: string;
  description?: string;
  color?: DefaultMantineColor;
}

const navLinks: NavLinkData[] = [
  { label: t("routes.home"), href: "/", icon: IconHome, color: "indigo" },
  {
    label: t("routes.forms.label"),
    description: t("routes.forms.description"),
    href: "/forms",
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

const Links = () => {
  const [active, setActive] = useState(0);

  const links = navLinks.map(
    ({ href, label, description, color, ...item }, index) => (
      <Link to={href} style={{ all: "inherit" }} key={crypto.randomUUID()}>
        <NavLink
          component="div"
          key={label}
          active={index === active}
          label={label}
          description={description}
          leftSection={item.icon && <item.icon size={16} stroke={1.5} />}
          onClick={() => setActive(index)}
          color={color}
        />
      </Link>
    )
  );
  return <>{links}</>;
};

export default Links;
