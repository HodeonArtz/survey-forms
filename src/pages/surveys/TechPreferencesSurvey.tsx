import { MultiSelect, Select, Textarea } from "@mantine/core";
import { useSurveeFormContext } from "../../forms/FormContext";

const TechPreferencesSurvey = () => {
  const form = useSurveeFormContext();
  return (
    <>
      <Textarea
        key={form.key("techComment")}
        {...form.getInputProps("techComment")}
        label="What technology would you like to learn in the future?"
        placeholder="Tell us which technology do you think would make you able to do great things"
        resize="vertical"
        rows={5}
      />
      <Select
        key={form.key("favoriteOS")}
        {...form.getInputProps("favoriteOS")}
        label="Select your favorite OS"
        placeholder="Select an OS"
        data={["💻 Windows", "🍎 MacOS", "🐧 Linux"]}
      />
      <MultiSelect
        key={form.key("userDevices")}
        {...form.getInputProps("userDevices")}
        label="Which devices do you normally use?"
        placeholder="Select 2 devices that you use"
        data={[
          { value: "smartphone", label: "📱 Smartphone" },
          { value: "laptop", label: "💻 Laptop" },
          { value: "tablet", label: "📲 Tablet" },
          { value: "smartwatch", label: "⌚ Smartwatch" },
        ]}
        maxValues={2}
      />
      <Select
        key={form.key("learningTime")}
        {...form.getInputProps("learningTime")}
        label="How many hours do you dedicate on learning tech?"
        placeholder="Select an estimated time"
        data={[
          { label: "1 hour", value: "1" },
          { label: "2 hours", value: "2" },
          { label: "3 hours", value: "3" },
          { label: "4 hours", value: "4" },
          { label: "5 hours", value: "5" },
          { label: "6 hours", value: "6" },
          { label: "7 hours", value: "7" },
          { label: "8 hours", value: "8" },
          { label: "9 hours", value: "9" },
          { label: "10 hours", value: "10" },
        ]}
      />
    </>
  );
};

export default TechPreferencesSurvey;
