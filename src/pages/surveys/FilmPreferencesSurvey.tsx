import {
  Autocomplete,
  Input,
  MultiSelect,
  Rating,
  TagsInput,
} from "@mantine/core";

const FilmPreferencesSurvey = () => {
  return (
    <>
      <TagsInput
        label="What film genres do you like?"
        placeholder="Choose the options or write your own option"
        data={["Action", "Sci-fi", "Comedy", "Horror"]}
        defaultValue={["Action", "Horror"]}
        clearable
      />
      <Autocomplete
        label={"What is your favorite movie?"}
        data={["Inception", "The Matrix", "Avengers", "Titanic"]}
      />
      <MultiSelect
        label="Select the movies that you've watched"
        placeholder="Open and click the movies that you've watched "
        data={["Inception", "The Matrix", "Avengers", "Titanic"]}
      />
      <Input.Wrapper label="How often do you watch movies?">
        <Rating size="lg" color="violet" />
      </Input.Wrapper>
    </>
  );
};

export default FilmPreferencesSurvey;
