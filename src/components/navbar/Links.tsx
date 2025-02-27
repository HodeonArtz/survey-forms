import { NavLink } from "@mantine/core";
import { Icon, IconProps } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavLinkData {
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  href: string;
  description?: string;
}

const navLinks: NavLinkData[] = [{ label: "routes.home", href: "/" }];

const Links = () => {
  const [active, setActive] = useState(0);

  const links = navLinks.map(({ href, label, description, ...item }, index) => (
    <Link to={href} style={{ textDecoration: "none" }}>
      <NavLink
        key={label}
        active={index === active}
        label={label}
        description={description}
        leftSection={item.icon && <item.icon size={16} stroke={1.5} />}
        onClick={() => setActive(index)}
      />
    </Link>
  ));
  return <>{links}</>;
};

export default Links;
