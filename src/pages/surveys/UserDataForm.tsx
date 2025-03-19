import { Autocomplete, InputBase, TagsInput, TextInput } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useSurveeFormContext } from "../../forms/FormContext";
import { useTranslation } from "react-i18next";

const UserDataForm = () => {
  const { t } = useTranslation();
  const form = useSurveeFormContext();
  return (
    <>
      <TextInput
        key={form.key("userName")}
        {...form.getInputProps("userName")}
        label={t("forms.userDataForm.questions.userName.label")}
        placeholder={t("forms.userDataForm.questions.userName.placeholder")}
      />
      <InputBase
        key={form.key("userDOB")}
        {...form.getInputProps("userDOB")}
        component={IMaskInput}
        label={t("forms.userDataForm.questions.userDOB.label")}
        placeholder="DD/MM/YYYY"
        mask={"00/00/0000"}
      />
      <TextInput
        key={form.key("userEmail")}
        {...form.getInputProps("userEmail")}
        label={t("forms.userDataForm.questions.userEmail.label")}
        placeholder="johndoe@stucom.com"
      />
      <Autocomplete
        key={form.key("userGenre")}
        {...form.getInputProps("userGenre")}
        label={t("forms.userDataForm.questions.userGenre.label")}
        placeholder={t("forms.userDataForm.questions.userGenre.placeholder")}
        data={
          t("forms.userDataForm.questions.userGenre.data", {
            returnObjects: true,
          }) as string[]
        }
      />
      <TagsInput
        key={form.key("userPreferences")}
        {...form.getInputProps("userPreferences")}
        label={t("forms.userDataForm.questions.userPreferences.label")}
        placeholder={t(
          "forms.userDataForm.questions.userPreferences.placeholder"
        )}
        data={
          t("forms.userDataForm.questions.userPreferences.data", {
            returnObjects: true,
          }) as string[]
        }
        clearable
      />
    </>
  );
};

export default UserDataForm;
