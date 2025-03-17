import { Autocomplete, InputBase, TagsInput, TextInput } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useSurveeFormContext } from "../../forms/FormContext";

const UserDataForm = () => {
  const form = useSurveeFormContext();
  return (
    <>
      <TextInput
        key={form.key("userName")}
        {...form.getInputProps("userName")}
        label="Full name"
        placeholder="e.g. John Doe"
      />
      <InputBase
        key={form.key("userDOB")}
        {...form.getInputProps("userDOB")}
        component={IMaskInput}
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        mask={"00/00/0000"}
      />
      <TextInput
        key={form.key("userEmail")}
        {...form.getInputProps("userEmail")}
        label="Email"
        placeholder="johndoe@stucom.com"
      />
      <Autocomplete
        key={form.key("userGenre")}
        {...form.getInputProps("userGenre")}
        label="Genre"
        placeholder="Choose one of the options or type other option"
        data={["Male", "Female", "I prefer not to say"]}
      />
      <TagsInput
        key={form.key("userPreferences")}
        {...form.getInputProps("userPreferences")}
        label="What do you do in your free time?"
        placeholder="Choose the options or write your own option"
        data={["📕 Read books", "⚽ Sports", "🛫 Travel", "🎬 Watch movies"]}
        clearable
      />
    </>
  );
};

export default UserDataForm;
