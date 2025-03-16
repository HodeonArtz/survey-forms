import { MultiSelect, Select, Textarea } from "@mantine/core";

const TechPreferencesSurvey = () => {
  return (
    <>
      <Textarea
        label="What technology would you like to learn in the future?"
        placeholder="Tell us which technology do you think would make you able to do great things"
        resize="vertical"
        rows={5}
      />
      <Select
        label="Select your favorite OS"
        data={["💻 Windows  ", "🍎 MacOS", "🐧 Linux"]}
      />
      <MultiSelect
        label="Which devices do you normally use?"
        data={[
          { value: "smartphone", label: "📱 Smartphone" },
          { value: "laptop", label: "💻 Laptop" },
          { value: "tablet", label: "📲 Tablet" },
          { value: "smartwatch", label: "⌚ Smartwatch" },
        ]}
        maxValues={2}
      />
      <Select
        label="How many hours do you dedicate on learning tech?"
        data={[
          { label: "1 hour", value: "1" },
          { label: "2 hour", value: "2" },
          { label: "3 hour", value: "3" },
          { label: "4 hour", value: "4" },
          { label: "5 hour", value: "5" },
          { label: "6 hour", value: "6" },
          { label: "7 hour", value: "7" },
          { label: "8 hour", value: "8" },
          { label: "9 hour", value: "9" },
          { label: "10 hour", value: "10" },
        ]}
      />
    </>
  );
};

export default TechPreferencesSurvey;
