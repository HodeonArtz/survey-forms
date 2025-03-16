import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  MantineSize,
  Stack,
  Stepper,
  Text,
  Title,
} from "@mantine/core";
import { MouseEventHandler, ReactNode, useState } from "react";
import UserDataForm from "./UserDataForm";
import AcademicEvaluationSurvey from "./AcademicEvaluationSurvey";
import FilmPreferencesSurvey from "./FilmPreferencesSurvey";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClipboardText,
  IconDeviceDesktop,
  IconMovie,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import TechPreferencesSurvey from "./TechPreferencesSurvey";
import PageTitle from "../../components/layout/PageTitle";

const SurveysPage = () => {
  const steps: {
    label: string;
    description?: string;
    icon?: ReactNode;
    content: ReactNode;
  }[] = [
    {
      icon: <IconUser size={18} />,
      label: "Personal User Data",
      description: "Submit your personal information",
      content: <UserDataForm />,
    },
    {
      icon: <IconSchool size={18} />,
      label: "Academic Evaluation",
      description: "Questions about this school year",
      content: <AcademicEvaluationSurvey />,
    },
    {
      icon: <IconDeviceDesktop size={18} />,
      label: "Tech Prefences",
      description: "Questions about Tech",
      content: <TechPreferencesSurvey />,
    },
    {
      icon: <IconMovie size={18} />,
      label: "Film Prefences",
      description: "Questions about Films",
      content: <FilmPreferencesSurvey />,
    },
  ];

  const [activeForm, setActiveForm] = useState(0);

  const nextForm = () =>
      setActiveForm((current) =>
        current < steps.length ? current + 1 : current
      ),
    prevForm = () =>
      setActiveForm((current) => (current > 0 ? current - 1 : current));

  const formNavigationProps: FormNavigationButtonsProps = {
    handlePrevForm: prevForm,
    handleNextForm: nextForm,
    currentForm: activeForm,
    formsLength: steps.length,
  };

  return (
    <Stack gap="xl">
      <PageTitle icon={<IconClipboardText size={44} />}>Surveys</PageTitle>
      <Stepper
        active={activeForm}
        onStepClick={setActiveForm}
        size="sm"
        iconSize="32"
        allowNextStepsSelect={false}
        radius="sm"
      >
        {steps.map(({ label, description, content, icon }) => {
          return (
            <Stepper.Step label={label} icon={icon} key={label}>
              <FormNavigationButtons
                {...formNavigationProps}
                showArrows
                size="md"
                showText={false}
              />
              <Container size="xs" mt="sm">
                <Stack gap="xl">
                  <Stack>
                    <Box>
                      <Title size="h3">{label}</Title>
                      <Text c="dimmed">{description}</Text>
                    </Box>
                    <Stack>{content}</Stack>
                  </Stack>
                  <FormNavigationButtons {...formNavigationProps} showArrows />
                </Stack>
              </Container>
            </Stepper.Step>
          );
        })}
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>
    </Stack>
  );
};

export default SurveysPage;

interface FormNavigationButtonsProps {
  handlePrevForm: MouseEventHandler<HTMLButtonElement>;
  handleNextForm: MouseEventHandler<HTMLButtonElement>;
  formsLength: number;
  currentForm: number;
  showArrows?: boolean;
  showText?: boolean;
  size?:
    | (string & {})
    | MantineSize
    | "compact-xs"
    | "compact-sm"
    | "compact-md"
    | "compact-lg"
    | "compact-xl"
    | undefined;
}

export const FormNavigationButtons = ({
  handlePrevForm,
  handleNextForm,
  formsLength,
  currentForm,
  showArrows = false,
  showText = true,
  size = "sm",
}: FormNavigationButtonsProps) => {
  const prevText = "Back";
  const nextText = currentForm >= formsLength - 1 ? "Complete" : "Next";
  const iconOnly = showArrows && !showText;
  const rightIcon =
    currentForm >= formsLength - 1 ? <IconCheck /> : <IconArrowRight />;

  const ButtonComponent = iconOnly ? ActionIcon : Button;

  return (
    <Group justify="space-between" mt="xs">
      <ButtonComponent
        variant="subtle"
        color="gray"
        disabled={currentForm === 0}
        onClick={handlePrevForm}
        leftSection={iconOnly ? undefined : showArrows && <IconArrowLeft />}
        size={size}
      >
        {showText && prevText}
        {iconOnly && <IconArrowLeft />}
      </ButtonComponent>
      <ButtonComponent
        disabled={currentForm === formsLength}
        onClick={handleNextForm}
        variant={currentForm >= formsLength - 1 ? "filled" : "subtle"}
        rightSection={iconOnly ? undefined : showArrows && rightIcon}
        size={size}
      >
        {showText && nextText}
        {iconOnly && rightIcon}
      </ButtonComponent>
    </Group>
  );
};
