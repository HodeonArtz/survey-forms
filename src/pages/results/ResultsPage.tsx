import { Anchor, Stack, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/layout/PageTitle";
import { IconChartHistogram } from "@tabler/icons-react";
import UserData from "./UserData";
import AcademicEvaluation from "./AcademicEvaluation";
import TechPreferences from "./TechPreferences";
import FilmPreferences from "./FilmPreferences";
import { readLocalStorageValue } from "@mantine/hooks";
import { Link } from "react-router-dom";

const ResultsPage = () => {
  const { t } = useTranslation();

  // conseguimos el valor guardado en localStorage que indica si el usuario ha enviado el formulario o no
  const isFormSubmitted = readLocalStorageValue<boolean>({
    key: "is-form-submitted",
  });

  return (
    <Stack gap="xl">
      <Stack>
        <PageTitle icon={<IconChartHistogram size={44} />}>
          {t("routes.results.label")}
        </PageTitle>
        <Title c="dimmed" size="h3">
          {t("routes.results.description")}
        </Title>
      </Stack>

      {/* Mostramos los resultados en base a si el usuario ha enviado el formulario */}
      {isFormSubmitted ? <Results /> : <FormNotSubmittedMesage />}
    </Stack>
  );
};

export default ResultsPage;

/* Componente que permite mostrar los resultados de cada formulario */
const Results = () => {
  return (
    <Stack gap="xl">
      <UserData />
      <AcademicEvaluation />
      <TechPreferences />
      <FilmPreferences />
    </Stack>
  );
};

/* Componente que muestra un mensaje para cuando el usuario no haya enviad un formulario aún */
const FormNotSubmittedMesage = () => {
  const { t } = useTranslation();
  return (
    <Text>
      {t("forms.noResults")}
      <Anchor component={Link} to={"/survey-forms/surveys"}>
        {t("forms.here")}
      </Anchor>
      .
    </Text>
  );
};
