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

      {isFormSubmitted ? <Results /> : <FormNotSubmittedMesage />}
    </Stack>
  );
};

export default ResultsPage;

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

const FormNotSubmittedMesage = () => {
  const { t } = useTranslation();
  return (
    <Text>
      {t("forms.noResults")}
      <Anchor component={Link} to={"/surveys"}>
        {t("forms.here")}
      </Anchor>
      .
    </Text>
  );
};
