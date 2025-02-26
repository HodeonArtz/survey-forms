import { Box, Group, Title } from "@mantine/core";
import { IconClipboardSmile } from "@tabler/icons-react";
import cx from "clsx";
import classes from "../../themes.module.css";
const BrandLogo = () => {
  return (
    <Group align="center" gap="6px">
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
  );
};

export default BrandLogo;
