import { Pill, PillGroup, Stack } from "@mantine/core";
import { FormValues } from "../../forms/FormContext";
import { readLocalStorageValue } from "@mantine/hooks";
import ResultFormTitle from "../../components/ResultFormTitle";
import { IconUser } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import ResultQuestion from "../../components/ResultQuestion";
import ResultFormContainer from "../../components/ResultFormContainer";
import { getFormattedDate } from "../../library/datetimes";

const formPath = "forms.userDataForm.questions";

const UserData = () => {
  const { t, i18n } = useTranslation();
  const form = readLocalStorageValue({ key: "user-form" }) as FormValues;

  return (
    <ResultFormContainer>
      <ResultFormTitle icon={<IconUser size={34} />}>
        {t("forms.userDataForm.title")}
      </ResultFormTitle>
      <Stack gap="md">
        <ResultQuestion question={t(`${formPath}.userName.label`)}>
          {form.userName}
        </ResultQuestion>
        <ResultQuestion question={t(`${formPath}.userDOB.label`)}>
          {getFormattedDate(form.userDOB, i18n.language)}
        </ResultQuestion>
        <ResultQuestion question={t(`${formPath}.userEmail.label`)}>
          {form.userEmail}
        </ResultQuestion>
        <ResultQuestion question={t(`${formPath}.userGenre.label`)}>
          {form.userGenre}
        </ResultQuestion>
        <ResultQuestion question={t(`${formPath}.userPreferences.label`)}>
          <PillGroup gap="16">
            {form.userPreferences.map((preference) => (
              <Pill size="lg">{preference}</Pill>
            ))}
          </PillGroup>
        </ResultQuestion>
      </Stack>
    </ResultFormContainer>
  );
};

export default UserData;
