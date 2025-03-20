import { Group, Stack, Text, Title } from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

// Componente que muestra la pantalla indicando de que podemos enviar el formulario o ir para atrás y revisar las respuestas
const CompletedScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack>
        <Group align="center" gap="sm">
          <IconConfetti size={34} />
          <Title size="h3">{t("forms.completedScreen.title")}</Title>
        </Group>
        <Text c="dimmed">{t("forms.completedScreen.subtitle")}</Text>
      </Stack>
    </>
  );
};

export default CompletedScreen;
