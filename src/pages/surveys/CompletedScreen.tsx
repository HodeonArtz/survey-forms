import { Group, Stack, Text, Title } from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";

const CompletedScreen = () => {
  return (
    <>
      <Stack>
        <Group align="center" gap="sm">
          <IconConfetti size={34} />
          <Title size="h3">1 click away and you're done!</Title>
        </Group>
        <Text c="dimmed">
          You can go back and check for any mistakes before submitting your
          answers
        </Text>
      </Stack>
    </>
  );
};

export default CompletedScreen;
