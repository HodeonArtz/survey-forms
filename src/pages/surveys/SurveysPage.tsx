import { Button, Container, Group, Stack, Stepper } from "@mantine/core";
import { ReactNode, useState } from "react";
import UserDataForm from "./UserDataForm";
import AcademicEvaluationSurvey from "./AcademicEvaluationSurvey";
import FilmPreferencesSurvey from "./FilmPreferencesSurvey";
import {
  IconClipboardText,
  IconDeviceDesktop,
  IconMovie,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import TechPreferencesSurvey from "./TechPreferencesSurvey";
import PageTitle from "../../components/layout/PageTitle";
import CompletedScreen from "./CompletedScreen";
import {
  FormNavigationButtons,
  FormNavigationButtonsProps,
} from "../../components/form/FormNavigationButtons";
import {
  formInitialValues,
  SurveeFormProvider,
  useSurveeForm,
} from "../../forms/FormContext";
import { FormLayout } from "../../components/form/FormLayout";
import { zodResolver } from "@mantine/form";
import { userFormSchema } from "../../forms/Validation";

const SurveysPage = () => {
  const steps: {
    label: string;
    description?: string;
    icon?: ReactNode;
    Content: ReactNode;
  }[] = [
    {
      icon: <IconUser size={18} />,
      label: "Personal User Data",
      description: "Submit your personal information",
      Content: <UserDataForm />,
    },
    {
      icon: <IconSchool size={18} />,
      label: "Academic Evaluation",
      description: "Questions about this school year",
      Content: <AcademicEvaluationSurvey />,
    },
    {
      icon: <IconDeviceDesktop size={18} />,
      label: "Tech Prefences",
      description: "Questions about technology",
      Content: <TechPreferencesSurvey />,
    },
    {
      icon: <IconMovie size={18} />,
      label: "Film Prefences",
      description: "Questions about films",
      Content: <FilmPreferencesSurvey />,
    },
  ];
  const [activeForm, setActiveForm] = useState(0);

  const form = useSurveeForm({
    mode: "controlled",
    initialValues: formInitialValues,
    validate: activeForm === 0 ? zodResolver(userFormSchema) : undefined,
  });

  const nextForm = () =>
      setActiveForm((current) => {
        if (form.validate().hasErrors) {
          return current;
        }
        return current < steps.length ? current + 1 : current;
      }),
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
      <SurveeFormProvider form={form}>
        <Stepper
          active={activeForm}
          onStepClick={setActiveForm}
          size="sm"
          iconSize="32"
          allowNextStepsSelect={false}
          radius="sm"
        >
          {steps.map(({ label, description, Content: content, icon }) => {
            return (
              <Stepper.Step label={label} icon={icon} key={label}>
                <FormNavigationButtons
                  {...formNavigationProps}
                  showArrows
                  size="md"
                  showText={false}
                />
                <FormLayout
                  description={description}
                  formNavigationProps={formNavigationProps}
                  label={label}
                >
                  {content}
                </FormLayout>
              </Stepper.Step>
            );
          })}
          <Stepper.Completed>
            <FormNavigationButtons
              {...formNavigationProps}
              showArrows
              size="md"
              showText={false}
            />
            <Container size="xs" mt="sm">
              <CompletedScreen />
              <Group align="center" justify="space-between">
                <FormNavigationButtons {...formNavigationProps} />
                <Button mt="xs">Submit</Button>
              </Group>
            </Container>
          </Stepper.Completed>
        </Stepper>
      </SurveeFormProvider>
    </Stack>
  );
};

export default SurveysPage;
