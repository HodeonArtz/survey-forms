import { InputBase, TextInput } from "@mantine/core";
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
      <TextInput
        label="What is your Email?"
        placeholder="johndoe@example.com"
      />
    </>
  );
};

export default UserDataForm;
