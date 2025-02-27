import { DefaultMantineColor, NavLink } from "@mantine/core";
import { Icon, IconHome, IconProps } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavLinkData {
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  href: string;
  description?: string;
  color?: DefaultMantineColor;
}

const Links = () => {
  const { t } = useTranslation();

  const navLinks: NavLinkData[] = [
    { label: t("routes.home"), href: "/", icon: IconHome, color: "violet" },
  ];
  const [active, setActive] = useState(0);

  const links = navLinks.map(
    ({ href, label, description, color, ...item }, index) => (
      <Link to={href} style={{ textDecoration: "none" }}>
        <NavLink
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
