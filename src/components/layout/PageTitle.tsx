import { Group, Title } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: string;
  icon?: ReactNode;
}

const PageTitle = ({ children: title, icon }: Props) => {
  return (
    <Group align="center" gap="xs">
      {icon}
      <Title size="h1" h={36}>
        {title}
      </Title>
    </Group>
  );
};

export default PageTitle;
