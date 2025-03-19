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
        label={t("forms.userDataForm.userName.label")}
        placeholder={t("forms.userDataForm.userName.placeholder")}
      />
      <InputBase
        key={form.key("userDOB")}
        {...form.getInputProps("userDOB")}
        component={IMaskInput}
        label={t("forms.userDataForm.userDOB.label")}
        placeholder="DD/MM/YYYY"
        mask={"00/00/0000"}
      />
      <TextInput
        key={form.key("userEmail")}
        {...form.getInputProps("userEmail")}
        label={t("forms.userDataForm.userEmail.label")}
        placeholder="johndoe@stucom.com"
      />
      <Autocomplete
        key={form.key("userGenre")}
        {...form.getInputProps("userGenre")}
        label={t("forms.userDataForm.userGenre.label")}
        placeholder={t("forms.userDataForm.userGenre.placeholder")}
        data={
          t("forms.userDataForm.userGenre.data", {
            returnObjects: true,
          }) as string[]
        }
      />
      <TagsInput
        key={form.key("userPreferences")}
        {...form.getInputProps("userPreferences")}
        label={t("forms.userDataForm.userPreferences.label")}
        placeholder={t("forms.userDataForm.userPreferences.placeholder")}
        data={
          t("forms.userDataForm.userPreferences.data", {
            returnObjects: true,
          }) as string[]
        }
        clearable
      />
    </>
  );
};

export default UserDataForm;
