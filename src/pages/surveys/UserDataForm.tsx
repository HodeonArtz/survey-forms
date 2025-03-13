import { Autocomplete, InputBase, TagsInput, TextInput } from "@mantine/core";
import { IMaskInput } from "react-imask";

const UserDataForm = () => {
  return (
    <>
      <TextInput label="What is your name?" placeholder="e.g. John Doe" />
      <InputBase
        component={IMaskInput}
        label="What is your date of birth?"
        placeholder="DD/MM/YYYY"
        mask={"00/00/0000"}
      />
      <TextInput label="What is your Email?" placeholder="johndoe@stucom.com" />
      <Autocomplete
        label="What is your genre?"
        placeholder="Choose one of the options or type other option"
        data={["Male", "Female", "I prefer not to say"]}
      />
      <TagsInput
        label="What do you do in your free time?"
        placeholder="Choose the options or write your own option"
        data={["📕 Read books", "⚽ Sports", "🛫 Travel", "🎬 Watch movies"]}
        defaultValue={["🎬 Watch movies", "📕 Read books"]}
        clearable
      />
    </>
  );
};

export default UserDataForm;
