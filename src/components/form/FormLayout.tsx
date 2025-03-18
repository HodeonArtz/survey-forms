import { ReactNode } from "react";
import {
  FormNavigationButtons,
  FormNavigationButtonsProps,
} from "./FormNavigationButtons";
import { Box, Container, Stack, Text, Title } from "@mantine/core";

interface FormLayoutProps {
  formNavigationProps: FormNavigationButtonsProps;
  label: string;
  description?: string;
  children: ReactNode;
}

export const FormLayout = ({
  children,
  description,
  formNavigationProps,
  label,
}: FormLayoutProps) => {
  return (
    <Container size="xs" mt="sm">
      <Stack gap="xl">
        <Stack>
          <Box>
            <Title size="h3">{label}</Title>
            <Text c="dimmed">{description}</Text>
          </Box>
          <Stack>{children}</Stack>
        </Stack>
        <FormNavigationButtons {...formNavigationProps} showArrows />
      </Stack>
    </Container>
  );
};
