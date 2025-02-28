import { Box, Group, Title } from "@mantine/core";
import { IconClipboardSmile } from "@tabler/icons-react";
import cx from "clsx";
import classes from "../../themes.module.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
const BrandLogo = () => {
  return (
    <Link
      to="/"
      style={{ all: "inherit" }}
      title={t("routes.home.description")}
    >
      <Group align="center" gap="6px" style={{ cursor: "pointer" }}>
        <IconClipboardSmile
          className={cx(classes["brand-logo"])}
          stroke={2}
          size="32px"
        />
        <Box h="28">
          <Title size="h3" fw="bolder" lts="-2px">
            Surveeform
          </Title>
        </Box>
      </Group>
    </Link>
  );
};

export default BrandLogo;
