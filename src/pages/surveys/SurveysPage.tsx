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
import { useNavigate } from "react-router-dom";

// Página que muestra los formularios de la página
const SurveysPage = () => {
  const { t } = useTranslation();

  // Utilizamos el hook useNavigate para poder utilizar su función y envíar el usuario a la ruta que indiquemos como parámetro en la función
  const navigateTo = useNavigate();

  // esta variable lo utilizamos para mapear los componentes de los formularios, de manera que podamos asignar a cada uno su icono, label, description, el comopnente del formulario en sí y su validación.
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

  // utilizamos useLocalStorage para guardar los valores del formulario en localStorage
  const [, storeFormValuesToLocal] = useLocalStorage<FormValues>({
    key: "user-form",
    defaultValue: formInitialValues,
  });

  // utilizamos useLocalStorage para guardar en qué formulario está el usuario en localStorage
  const [, storeActiveFormToLocal] = useLocalStorage<number>({
    key: "active-form",
    defaultValue: 0,
  });

  // utilizamos useLocalStorage para guardar si el usuario ha enviadoe el formulario en localStorage
  const [, storeIsFormSubmittedToLocal] = useLocalStorage<boolean>({
    key: "is-form-submitted",
    defaultValue: false,
  });

  // guardamos el estado de la posición del formulario actual para navegar entre los formularios, y de paso, asignamos el valor que viene del localStorage
  const [activeForm, setActiveForm] = useState(
    readLocalStorageValue<number>({ key: "active-form" })
  );

  // Usamos el hook definido en FormContext.tsx para poder gestionar y configurar la manera en como controlamos y gestionamos los valores de los inputs de cada formulario
  const form = useSurveeForm({
    mode: "controlled",
    initialValues: readLocalStorageValue({ key: "user-form" }),
    validate:
      activeForm < steps.length
        ? zodResolver(z.object(steps[activeForm].schema))
        : undefined, // Dinámicamente realizamos la validación correspondiente al formulario que se está mostrando actualmente
    onValuesChange(values) {
      storeFormValuesToLocal(values); // guardamos los valores en localStoarge cada vez que hagamos un cambio en el formulario entero
    },
  });

  // funcion par poder navegar al siguiente formulario
  const goToNextForm = () => {
      setActiveForm((current) => {
        if (form.validate().hasErrors) return current;

        return current < steps.length ? current + 1 : current;
      });
    },
    // funcion para poder navegar al anterior formulario
    goToPrevForm = () => {
      setActiveForm((current) => (current > 0 ? current - 1 : current));
    };

  // este useEffect se ejecutará cada vez que navegemos entre los formularios para guardar en qué formulario estamos actualmente
  useEffect(() => {
    storeActiveFormToLocal(activeForm);
  }, [activeForm, storeActiveFormToLocal]);

  // función para reestablecer el formulario
  const handleReset = () => {
    form.reset();
    form.setValues(formInitialValues);
    setActiveForm(0);
    storeActiveFormToLocal(0);
    storeIsFormSubmittedToLocal(false);
  };

  // función para enviar el formulario y mostrar los resultados
  const handleSubmit = () => {
    storeIsFormSubmittedToLocal(true);
    navigateTo("/results");
  };

  // función para cancelar el envío del formulario
  const handleCancelSubmission = () => {
    storeIsFormSubmittedToLocal(false);
  };

  // Props que utilizaremos para gestionar la navegación entre formularios
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
          onStepClick={(stepIndex) => {
            setActiveForm(stepIndex);
            handleCancelSubmission();
          }}
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
                <FormNavigationButtons
                  {...formNavigationProps}
                  handlePrevForm={() => {
                    formNavigationProps.handlePrevForm();
                    handleCancelSubmission();
                  }}
                />
                <Button mt="xs" onClick={handleSubmit}>
                  {t("forms.buttons.finish")}
                </Button>
              </Group>
            </Container>
          </Stepper.Completed>
        </Stepper>
      </SurveeFormProvider>
    </Stack>
  );
};

export default SurveysPage;
