import { Box, Button, Group, Stack, Stepper, Text, Title } from "@mantine/core";
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
      >
        {steps.map(({ label, description, content, icon }) => {
          return (
            <Stepper.Step label={label} icon={icon} key={label}>
              <Stack>
                <Box>
                  <Title size="h3">{label}</Title>
                  <Text c="dimmed">{description}</Text>
                </Box>
                <Stack>{content}</Stack>
              </Stack>
            </Stepper.Step>
          );
        })}
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>
      <FormNavigationButtons {...formNavigationProps} showArrows />
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
}

export const FormNavigationButtons = ({
  handlePrevForm,
  handleNextForm,
  formsLength,
  currentForm,
  showArrows = false,
  showText = true,
}: FormNavigationButtonsProps) => {
  const prevText = "Back";
  const nextText = currentForm >= formsLength - 1 ? "Complete" : "Next";

  return (
    <Group justify="space-between" mt="xs">
      <Button
        variant="subtle"
        color="gray"
        disabled={currentForm === 0}
        onClick={handlePrevForm}
        leftSection={showArrows && <IconArrowLeft />}
      >
        {showText && prevText}
      </Button>
      <Button
        disabled={currentForm === formsLength}
        onClick={handleNextForm}
        variant={currentForm >= formsLength - 1 ? "filled" : "subtle"}
        rightSection={
          showArrows &&
          (currentForm >= formsLength - 1 ? <IconCheck /> : <IconArrowRight />)
        }
      >
        {showText && nextText}
      </Button>
    </Group>
  );
};
