import { Rating, Stack } from "@mantine/core";
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
  const { t, i18n } = useTranslation();
  const form = readLocalStorageValue({ key: "user-form" }) as FormValues;

  return (
    <ResultFormContainer>
      <ResultFormTitle icon={<IconSchool size={34} />}>
        {t(`${formPath}.title`)}
      </ResultFormTitle>
      <Stack gap="sm">
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
