import { MultiSelect, Select, Textarea } from "@mantine/core";
import { useSurveeFormContext } from "../../forms/FormContext";
import { arrayFrom } from "../../library/arrays";
import { useTranslation } from "react-i18next";
import { OSDisplayMap } from "../../forms/techPreferences";

const TechPreferencesSurvey = () => {
  const form = useSurveeFormContext();
  const { t } = useTranslation();
  return (
    <>
      <Textarea
        key={form.key("techComment")}
        {...form.getInputProps("techComment")}
        label={t("forms.techPreferences.questions.techComment.label")}
        placeholder={t(
          "forms.techPreferences.questions.techComment.placeholder"
        )}
        resize="vertical"
        rows={5}
      />
      <Select
        key={form.key("favoriteOS")}
        {...form.getInputProps("favoriteOS")}
        label={t("forms.techPreferences.questions.favoriteOS.label")}
        placeholder={t(
          "forms.techPreferences.questions.favoriteOS.placeholder"
        )}
        data={OSDisplayMap}
        allowDeselect={false}
      />
      <MultiSelect
        key={form.key("userDevices")}
        {...form.getInputProps("userDevices")}
        label={t("forms.techPreferences.questions.userDevices.label")}
        placeholder={t(
          "forms.techPreferences.questions.userDevices.placeholder"
        )}
        data={[
          { value: "smartphone", label: "📱 Smartphone" },
          { value: "laptop", label: "💻 Laptop" },
          { value: "tablet", label: "📲 Tablet" },
          { value: "smartwatch", label: "⌚ Smartwatch" },
        ]}
        maxValues={2}
      />
      <Select
        key={form.key("learningTime")}
        {...form.getInputProps("learningTime")}
        label={t("forms.techPreferences.questions.learningTime.label")}
        placeholder={t(
          "forms.techPreferences.questions.learningTime.placeholder"
        )}
        data={arrayFrom(10).map((number) => ({
          label: t("time.hour", { count: number }),
          value: `${number}`,
        }))}
        allowDeselect={false}
      />
    </>
  );
};

export default TechPreferencesSurvey;
