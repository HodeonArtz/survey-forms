import { Paper, Stack } from "@mantine/core";
import { ReactNode } from "react";

const ResultFormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Paper shadow="xs" withBorder p="xl">
      <Stack gap="md">{children}</Stack>
    </Paper>
  );
};

export default ResultFormContainer;
