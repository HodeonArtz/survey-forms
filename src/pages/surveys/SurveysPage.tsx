import {
  ActionIcon,
  Button,
  Container,
  Group,
  Stack,
  Stepper,
  Tooltip,
} from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import UserDataForm from "./UserDataForm";
import AcademicEvaluationSurvey from "./AcademicEvaluationSurvey";
import FilmPreferencesSurvey from "./FilmPreferencesSurvey";
import {
  IconClipboardText,
  IconDeviceDesktop,
  IconMovie,
  IconRestore,
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
  FormValues,
  SurveeFormProvider,
  useSurveeForm,
} from "../../forms/FormContext";
import { FormLayout } from "../../components/form/FormLayout";
import { zodResolver } from "@mantine/form";
import {
  academicEvaluationSchema,
  filmPreferencesSchema,
  techPreferencesSchema,
  userFormSchema,
} from "../../forms/Validation";
import { z, ZodRawShape } from "zod";
import { readLocalStorageValue, useLocalStorage } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

const SurveysPage = () => {
  const { t } = useTranslation();
  const steps: {
    label: string;
    description?: string;
    icon?: ReactNode;
    Content: ReactNode;
    schema: ZodRawShape;
  }[] = [
    {
      icon: <IconUser size={18} />,
      label: t("forms.userDataForm.title"),
      description: t("forms.userDataForm.description"),
      Content: <UserDataForm />,
      schema: userFormSchema,
    },
    {
      icon: <IconSchool size={18} />,
      label: t("forms.academicEvaluation.title"),
      description: t("forms.academicEvaluation.description"),
      Content: <AcademicEvaluationSurvey />,
      schema: academicEvaluationSchema,
    },
    {
      icon: <IconDeviceDesktop size={18} />,
      label: t("forms.techPreferences.title"),
      description: t("forms.techPreferences.description"),
      Content: <TechPreferencesSurvey />,
      schema: techPreferencesSchema,
    },
    {
      icon: <IconMovie size={18} />,
      label: t("forms.filmPreferences.title"),
      description: t("forms.filmPreferences.description"),
      Content: <FilmPreferencesSurvey />,
      schema: filmPreferencesSchema,
    },
  ];
  const [, storeFormValuesToLocal] = useLocalStorage<FormValues>({
    key: "user-form",
    defaultValue: formInitialValues,
  });

  const [, storeActiveFormToLocal] = useLocalStorage<number>({
    key: "active-form",
    defaultValue: 0,
  });

  const [activeForm, setActiveForm] = useState(
    readLocalStorageValue<number>({ key: "active-form" })
  );

  const form = useSurveeForm({
    mode: "controlled",
    initialValues: readLocalStorageValue({ key: "user-form" }),
    validate:
      activeForm < steps.length
        ? zodResolver(z.object(steps[activeForm].schema))
        : undefined,
    onValuesChange(values) {
      storeFormValuesToLocal(values);
    },
  });

  const goToNextForm = () => {
      setActiveForm((current) => {
        if (form.validate().hasErrors) return current;

        return current < steps.length ? current + 1 : current;
      });
    },
    goToPrevForm = () => {
      setActiveForm((current) => (current > 0 ? current - 1 : current));
    };

  useEffect(() => {
    storeActiveFormToLocal(activeForm);
  }, [activeForm, storeActiveFormToLocal]);

  const handleReset = () => {
    form.reset();
    form.setValues(formInitialValues);
    setActiveForm(0);
    storeActiveFormToLocal(0);
  };

  const formNavigationProps: FormNavigationButtonsProps = {
    handlePrevForm: goToPrevForm,
    handleNextForm: goToNextForm,
    currentForm: activeForm,
    formsLength: steps.length,
  };

  return (
    <Stack gap="xl">
      <Group align="center">
        <PageTitle icon={<IconClipboardText size={44} />}>
          {t("forms.title")}
        </PageTitle>
        <Tooltip label={t("forms.buttons.restartForm")}>
          <ActionIcon
            variant="subtle"
            color="gray"
            size="xl"
            aria-label={t("forms.buttons.restartForm")}
            onClick={handleReset}
          >
            <IconRestore style={{ width: "70%", height: "70%" }} stroke={2} />
          </ActionIcon>
        </Tooltip>
      </Group>
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
