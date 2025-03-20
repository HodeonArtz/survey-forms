import { Group, Title } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  children: ReactNode | string;
}

const ResultFormTitle = ({ children, icon }: Props) => {
  return (
    <Group>
      {icon}
      <Title size="h3">{children}</Title>
    </Group>
  );
};

export default ResultFormTitle;
