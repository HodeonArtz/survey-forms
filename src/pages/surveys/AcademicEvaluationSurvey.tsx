import { Checkbox, Input, MultiSelect, Rating, Textarea } from "@mantine/core";
import { useSurveeFormContext } from "../../forms/FormContext";
import { useTranslation } from "react-i18next";

const AcademicEvaluationSurvey = () => {
  const { t } = useTranslation();
  const form = useSurveeFormContext();

  return (
    <>
      <Textarea
        key={form.key("yearsComment")}
        {...form.getInputProps("yearsComment")}
        label={t("forms.academicEvaluation.questions.yearsComment.label")}
        placeholder={t(
          "forms.academicEvaluation.questions.yearsComment.placeholder"
        )}
        rows={5}
      />
      <Input.Wrapper
        label={t("forms.academicEvaluation.questions.materialRating.label")}
      >
        <Rating
          key={form.key("materialRating")}
          {...form.getInputProps("materialRating")}
          size="lg"
          color="violet"
          fractions={4}
        />
      </Input.Wrapper>
      <MultiSelect
        key={form.key("preferredSchedules")}
        {...form.getInputProps("preferredSchedules")}
        label="Which schedules do you prefer for class?"
        placeholder="Select 1-2 schedules that work the best for you"
        data={[
          { value: "monday", label: `${t("weekday.monday")}: 9 AM - 11 PM` },
          { value: "tuesday", label: `${t("weekday.tuesday")}: 3 PM - 5 PM` },
          {
            value: "wednesday",
            label: `${t("weekday.wednesday")}: 10 AM - 12 PM`,
          },
          { value: "thursday", label: `${t("weekday.thursday")}: 1 PM - 3 PM` },
          { value: "friday", label: `${t("weekday.friday")}: 4 PM - 6 PM` },
        ]}
        maxValues={2}
      />
      <Checkbox
        key={form.key("assistedToAllClasses")}
        {...form.getInputProps("assistedToAllClasses")}
        label={t(
          "forms.academicEvaluation.questions.assistedToAllClasses.label",
          {
            assisted: t(
              `forms.academicEvaluation.questions.assistedToAllClasses.label_context.${
                form.getValues().assistedToAllClasses
              }`
            ),
          }
        )}
      />
    </>
  );
};

export default AcademicEvaluationSurvey;
