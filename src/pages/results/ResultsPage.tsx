import { Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/layout/PageTitle";
import { IconChartHistogram } from "@tabler/icons-react";
import UserData from "./UserData";
import AcademicEvaluation from "./AcademicEvaluation";
import TechPreferences from "./TechPreferences";

const ResultsPage = () => {
  const { t } = useTranslation();

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
      <Stack gap={"lg"}>
        <UserData />
        <AcademicEvaluation />
        <TechPreferences />
      </Stack>
    </Stack>
  );
};

export default ResultsPage;
