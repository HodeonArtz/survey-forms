import { isValid, parse } from "date-fns";
import { z } from "zod";

export const userFormSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Name must have 3 characters min." })
    .max(50, { message: "Name must have 50 characters max." }),
  userDOB: z.string().refine(
    (val) => {
      const date = parse(val, "dd/MM/yyyy", new Date());
      return isValid(date);
    },
    {
      message: "Date must have a format of DD/MM/YYYY",
    }
  ),
  userEmail: z
    .string()
    .email("Email is not valid")
    .min(5, { message: "Email must have 5 characters min." })
    .max(100, { message: "Email must have 100 characters max." })
    .refine((email) => email.endsWith("@stucom.com"), {
      message: 'Email should be from "stucom.com"',
    }),
  userGenre: z
    .string()
    .min(3, { message: "Genre must have 3 characters min." })
    .max(50, { message: "Genre must have 50 characters max." }),
  userPreferences: z
    .array(z.string())
    .min(1, { message: "You should put at least 1 activity" }),
});

export const academicEvaluationSchema = z.object({
  yearsComment: z
    .string()
    .min(15, { message: "Your opinion must have 15 characters min." })
    .max(250, { message: "Your opinion must have 50 characters max." }),
  materialRating: z
    .number()
    .min(1, { message: "Your rating can't be below 1" })
    .max(5, { message: "Your rating can't be above 5" }),
});
