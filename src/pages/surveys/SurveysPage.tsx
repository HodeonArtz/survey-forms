import { Box, Button, Group, Stepper, Title } from "@mantine/core";
import { ReactNode, useState } from "react";
import UserDataForm from "./UserDataForm";
import AcademicEvaluationSurvey from "./AcademicEvaluationSurvey";
import FilmPreferencesSurvey from "./FilmPreferencesSurvey";
import {
  IconDeviceDesktop,
  IconMovie,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import TechPreferencesSurvey from "./TechPreferencesSurvey";

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

  return (
    <Box>
      <Title size="h1">Surveys</Title>
      <Stepper
        active={activeForm}
        onStepClick={setActiveForm}
        size="sm"
        iconSize="32"
        allowNextStepsSelect={false}
      >
        {steps.map(({ label, description, content, icon }, i) => {
          return (
            <Stepper.Step
              label={label}
              description={description}
              icon={icon}
              key={label}
            >
              {content}
            </Stepper.Step>
          );
        })}
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevForm}>
          Back
        </Button>
        <Button onClick={nextForm}>Next step</Button>
      </Group>
    </Box>
  );
};

export default SurveysPage;
