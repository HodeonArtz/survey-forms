import { Input, MultiSelect, Rating, Textarea } from "@mantine/core";

const AcademicEvaluationSurvey = () => {
  return (
    <>
      <Textarea
        label="What things could improve this year in general?"
        placeholder="Give us some suggestions and feedback to improve your learning for this year"
        resize="vertical"
        rows={5}
      />
      <Input.Wrapper label="Rate this year's material">
        <Rating size="lg" color="violet" fractions={4} />
      </Input.Wrapper>
      <MultiSelect
        label="Which schedules do you prefer for class?"
        data={[
          { value: "monday", label: "Monday: 9 AM - 11 PM" },
          { value: "tuesday", label: "Tuesday: 3 PM - 5 PM" },
          { value: "wednesday", label: "Wednesday: 10 AM - 12 PM" },
          { value: "thursday", label: "Thursday: 1 PM - 3 PM" },
          { value: "friday", label: "Friday: 4 PM - 6 PM" },
        ]}
        maxValues={2}
      />
    </>
  );
};

export default AcademicEvaluationSurvey;
