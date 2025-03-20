import {
  Autocomplete,
  Group,
  Input,
  MultiSelect,
  Rating,
  TagsInput,
  Text,
} from "@mantine/core";
import { IconMoodSad, IconMoodSmile } from "@tabler/icons-react";
import { useSurveeFormContext } from "../../forms/FormContext";
import { useTranslation } from "react-i18next";

// Componente que muestra el formulario para las preferencias en películas
const FilmPreferencesSurvey = () => {
  const form = useSurveeFormContext();
  const { t } = useTranslation();
  const frequencyWord = (
    t("forms.filmPreferences.questions.frequencyWatchingFilms.data", {
      returnObjects: true,
    }) as string[]
  )[form.getValues().frequencyWatchingFilms - 1];
  return (
    <>
      <TagsInput
        key={form.key("filmGenres")}
        {...form.getInputProps("filmGenres")}
        label={t("forms.filmPreferences.questions.filmGenres.label")}
        placeholder={t(
          "forms.filmPreferences.questions.filmGenres.placeholder"
        )}
        data={
          t("forms.filmPreferences.questions.filmGenres.data", {
            returnObjects: true,
          }) as string[]
        }
        defaultValue={
          t("forms.filmPreferences.questions.filmGenres.defaultValues", {
            returnObjects: true,
          }) as string[]
        }
        clearable
      />
      <Autocomplete
        key={form.key("favoriteFilm")}
        {...form.getInputProps("favoriteFilm")}
        label={t("forms.filmPreferences.questions.favoriteFilm.label")}
        placeholder={t(
          "forms.filmPreferences.questions.favoriteFilm.placeholder"
        )}
        data={["Inception", "The Matrix", "Avengers", "Titanic"]}
      />
      <MultiSelect
        key={form.key("watchedFilms")}
        {...form.getInputProps("watchedFilms")}
        label={t("forms.filmPreferences.questions.watchedFilms.label")}
        placeholder={t(
          "forms.filmPreferences.questions.watchedFilms.placeholder"
        )}
        data={["Inception", "The Matrix", "Avengers", "Titanic"]}
      />
      <Input.Wrapper
        label={t(
          "forms.filmPreferences.questions.frequencyWatchingFilms.label"
        )}
      >
        <Group align="start">
          <Rating
            key={form.key("frequencyWatchingFilms")}
            {...form.getInputProps("frequencyWatchingFilms")}
            size="lg"
            color="violet"
            emptySymbol={<IconMoodSad />}
            fullSymbol={<IconMoodSmile color="#7950F2" />}
            count={5}
          />
          <Text fw="bolder" c="violet.3">
            {frequencyWord}
          </Text>
        </Group>
      </Input.Wrapper>
    </>
  );
};

export default FilmPreferencesSurvey;
