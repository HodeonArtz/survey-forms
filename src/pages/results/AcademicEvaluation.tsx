import { Pill, PillGroup, Rating, Stack } from "@mantine/core";
import { FormValues } from "../../forms/FormContext";
import { readLocalStorageValue } from "@mantine/hooks";
import ResultFormTitle from "../../components/ResultFormTitle";
import { IconSchool } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import ResultQuestion from "../../components/ResultQuestion";
import ResultFormContainer from "../../components/ResultFormContainer";

const formPath = "forms.academicEvaluation";
const questionsPath = `${formPath}.questions`;

const AcademicEvaluation = () => {
  const { t } = useTranslation();

  const schedules = {
    monday: `${t("weekday.monday")}: 9 AM - 11 PM`,
    tuesday: `${t("weekday.tuesday")}: 3 PM - 5 PM`,
    wednesday: `${t("weekday.wednesday")}: 10 AM - 12 PM`,
    thursday: `${t("weekday.thursday")}: 1 PM - 3 PM`,
    friday: `${t("weekday.friday")}: 4 PM - 6 PM`,
  };

  const form = readLocalStorageValue({ key: "user-form" }) as FormValues;

  return (
    <ResultFormContainer>
      <ResultFormTitle icon={<IconSchool size={34} />}>
        {t(`${formPath}.title`)}
      </ResultFormTitle>
      <Stack gap="xl">
        <ResultQuestion question={t(`${questionsPath}.yearsComment.label`)}>
          {form.yearsComment}
        </ResultQuestion>
        <ResultQuestion question={t(`${questionsPath}.materialRating.label`)}>
          <Rating
            value={form.materialRating}
            readOnly
            color="violet"
            size="lg"
          />
        </ResultQuestion>
        <ResultQuestion
          question={t(`${questionsPath}.preferredSchedules.label`)}
        >
          <PillGroup gap="16">
            {form.preferredSchedules.map((preference) => (
              <Pill size="lg">{schedules[preference]}</Pill>
            ))}
          </PillGroup>
        </ResultQuestion>
        <ResultQuestion
          question={t(`${questionsPath}.assistedToAllClasses.labelDefault`)}
        >
          {t(`${questionsPath}.assistedToAllClasses.ego`)}{" "}
          {t(
            `${questionsPath}.assistedToAllClasses.label_context.${form.assistedToAllClasses}`
          )}{" "}
          {form.assistedToAllClasses ? "😁" : "😐"}
        </ResultQuestion>
      </Stack>
    </ResultFormContainer>
  );
};

export default AcademicEvaluation;
