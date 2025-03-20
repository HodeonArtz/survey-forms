import { Autocomplete, InputBase, TagsInput, TextInput } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useSurveeFormContext } from "../../forms/FormContext";
import { useTranslation } from "react-i18next";

const UserDataForm = () => {
  // usamos el hook de i18n para conseguir la traduccion de ciertos textos
  const { t } = useTranslation();

  // usamos el hook que hemos definido en FormContext.tsx para gestionar los valores del formuario
  const form = useSurveeFormContext();
  return (
    <>
      <TextInput
        // form tiene una propiedad que es "key" que permitirá a nuestro "gestor" de formularios, poder identificar cada input
        key={form.key("userName")}
        // con el spread operator conseguimos los props necesarios para asignarlo a input para así poder gestionar el input acorde a la propiedad definida en FormValues
        {...form.getInputProps("userName")}
        label={t("forms.userDataForm.questions.userName.label")}
        placeholder={t("forms.userDataForm.questions.userName.placeholder")}
      />
      <InputBase
        key={form.key("userDOB")}
        {...form.getInputProps("userDOB")}
        component={IMaskInput} // Utilizamos el componente de IMaskInput para añadir una "máscara" mientras el usuario va escribiendo su fecha de nacimiento
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
