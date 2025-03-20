import { Pill, PillGroup, Stack } from "@mantine/core";
import { FormValues } from "../../forms/FormContext";
import { readLocalStorageValue } from "@mantine/hooks";
import ResultFormTitle from "../../components/ResultFormTitle";
import { useTranslation } from "react-i18next";
import ResultQuestion from "../../components/ResultQuestion";
import ResultFormContainer from "../../components/ResultFormContainer";
import { IconMovie } from "@tabler/icons-react";

const formPath = "forms.filmPreferences";
const questionsPath = `${formPath}.questions`;

const FilmPreferences = () => {
  const { t } = useTranslation();

  const form = readLocalStorageValue({ key: "user-form" }) as FormValues;

  return (
    <ResultFormContainer>
      <ResultFormTitle icon={<IconMovie size={34} />}>
        {t(`${formPath}.title`)}
      </ResultFormTitle>
      <Stack gap="xl">
        <ResultQuestion question={t(`${questionsPath}.filmGenres.label`)}>
          <PillGroup gap="16">
            {form.filmGenres.map((preference) => (
              <Pill size="lg">{preference}</Pill>
            ))}
          </PillGroup>
        </ResultQuestion>
        <ResultQuestion question={t(`${questionsPath}.favoriteFilm.label`)}>
          {form.favoriteFilm}
        </ResultQuestion>
        <ResultQuestion question={t(`${questionsPath}.watchedFilms.label`)}>
          <PillGroup gap="16">
            {form.watchedFilms.map((preference) => (
              <Pill size="lg">{preference}</Pill>
            ))}
          </PillGroup>
        </ResultQuestion>
        <ResultQuestion
          question={t(`${questionsPath}.frequencyWatchingFilms.label`)}
        >
          {
            (
              t(`${questionsPath}.frequencyWatchingFilms.data`, {
                returnObjects: true,
              }) as string[]
            )[form.frequencyWatchingFilms]
          }
        </ResultQuestion>
      </Stack>
    </ResultFormContainer>
  );
};

export default FilmPreferences;
