import { Checkbox, Input, MultiSelect, Rating, Textarea } from "@mantine/core";
import { useSurveeFormContext } from "../../forms/FormContext";

const AcademicEvaluationSurvey = () => {
  const form = useSurveeFormContext();

  return (
    <>
      <Textarea
        key={form.key("yearsComment")}
        {...form.getInputProps("yearsComment")}
        label="What things could improve this year in general?"
        placeholder="Give us some suggestions and feedback to improve your learning for this year"
        resize="vertical"
        rows={5}
      />
      <Input.Wrapper label="Rate this year's material">
        <Rating
          key={form.key("materialRating")}
          {...form.getInputProps("materialRating")}
          size="lg"
          color="violet"
          fractions={4}
        />
      </Input.Wrapper>
      <MultiSelect
        key={form.key("preferredSchedules")}
        {...form.getInputProps("preferredSchedules")}
        label="Which schedules do you prefer for class?"
        placeholder="Select 1-2 schedules that work the best for you"
        data={[
          { value: "monday", label: "Monday: 9 AM - 11 PM" },
          { value: "tuesday", label: "Tuesday: 3 PM - 5 PM" },
          { value: "wednesday", label: "Wednesday: 10 AM - 12 PM" },
          { value: "thursday", label: "Thursday: 1 PM - 3 PM" },
          { value: "friday", label: "Friday: 4 PM - 6 PM" },
        ]}
        maxValues={2}
      />
      <Checkbox
        key={form.key("assistedToAllClasses")}
        {...form.getInputProps("assistedToAllClasses")}
        defaultChecked
        label={`I ${
          form.getValues().assistedToAllClasses ? "assisted" : "did not assist"
        } to all classes`}
      />
    </>
  );
};

export default AcademicEvaluationSurvey;
