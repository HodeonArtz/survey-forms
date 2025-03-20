import { Box, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  question: string;
  children: ReactNode | string;
}

const ResultQuestion = ({ question, children }: Props) => {
  return (
    <Stack gap="3">
      <Text size="lg" fw="bolder">
        {question}
      </Text>
      <Box>
        {typeof children === "string" ? (
          <Text size="md">{children}</Text>
        ) : (
          children
        )}
      </Box>
    </Stack>
  );
};

export default ResultQuestion;
