import { createFormContext } from "@mantine/form";

interface FormValues {
  userName: string;
  userDOB: string;
  userEmail: string;
  userGenre: string;
  userPreferences: string[];
}

export const [SurveeFormProvider, useSurveeFormContext, useSurveeForm] =
  createFormContext<FormValues>();
