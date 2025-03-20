import { readLocalStorageValue } from "@mantine/hooks";
import { FormValues } from "../../forms/FormContext";
import { useTranslation } from "react-i18next";
import ResultFormContainer from "../../components/ResultFormContainer";
import ResultFormTitle from "../../components/ResultFormTitle";
import { Pill, PillGroup, Stack } from "@mantine/core";
import ResultQuestion from "../../components/ResultQuestion";
import { IconDeviceDesktop } from "@tabler/icons-react";
import { devicesMap, OSDisplayMap } from "../../forms/techPreferences";

const formPath = "forms.techPreferences";
const questionsPath = `${formPath}.questions`;

// Componente que muestra los resultados de la preferencia en tecnología
const TechPreferences = () => {
  const { t } = useTranslation();

  const form = readLocalStorageValue({ key: "user-form" }) as FormValues;

  return (
    <ResultFormContainer>
      <ResultFormTitle icon={<IconDeviceDesktop size={34} />}>
        {t(`${formPath}.title`)}
      </ResultFormTitle>
      <Stack gap="xl">
        <ResultQuestion question={t(`${questionsPath}.techComment.label`)}>
          {form.techComment}
        </ResultQuestion>
        <ResultQuestion
          question={t(`${questionsPath}.favoriteOS.labelAlternative`)}
        >
          {OSDisplayMap.find(({ value }) => value === form.favoriteOS)?.label}
        </ResultQuestion>
        <ResultQuestion question={t(`${questionsPath}.userDevices.label`)}>
          <PillGroup gap="16">
            {form.userDevices.map((preference) => (
              <Pill size="lg">
                {devicesMap.find(({ value }) => value === preference)?.label}
              </Pill>
            ))}
          </PillGroup>
        </ResultQuestion>
        <ResultQuestion question={t(`${questionsPath}.learningTime.label`)}>
          {t("time.hour", {
            count: form.learningTime ? +form.learningTime : 0,
          })}
        </ResultQuestion>
      </Stack>
    </ResultFormContainer>
  );
};

export default TechPreferences;
