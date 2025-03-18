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

const ratingMoviesFrequency = [
  "Never",
  "Barely",
  "Sometimes",
  "Often",
  "Always",
];

const FilmPreferencesSurvey = () => {
  const form = useSurveeFormContext();
  return (
    <>
      <TagsInput
        key={form.key("filmGenres")}
        {...form.getInputProps("filmGenres")}
        label="What film genres do you like?"
        placeholder="Choose the options or write your own option"
        data={["Action", "Sci-fi", "Comedy", "Horror"]}
        defaultValue={["Action", "Horror"]}
        clearable
      />
      <Autocomplete
        key={form.key("favoriteFilm")}
        {...form.getInputProps("favoriteFilm")}
        label={"What is your favorite movie?"}
        data={["Inception", "The Matrix", "Avengers", "Titanic"]}
      />
      <MultiSelect
        key={form.key("watchedFilms")}
        {...form.getInputProps("watchedFilms")}
        label="Select the movies that you've watched"
        placeholder="Open and click the movies that you've watched "
        data={["Inception", "The Matrix", "Avengers", "Titanic"]}
      />
      <Input.Wrapper label="How often do you watch movies?">
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
          <Text>f</Text>
        </Group>
      </Input.Wrapper>
    </>
  );
};

export default FilmPreferencesSurvey;
