import { Box, Group, Title } from "@mantine/core";
import { IconClipboardSmile } from "@tabler/icons-react";

const BrandLogo = () => {
  return (
    <Group align="center" gap="6px">
      <IconClipboardSmile stroke={2} color="#7048E8" size="32px" />
      <Box h="28">
        <Title size="h3" fw="bolder" lts="-2px">
          Surveeform
        </Title>
      </Box>
    </Group>
  );
};

export default BrandLogo;
