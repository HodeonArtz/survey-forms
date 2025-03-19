import { isValid, parse } from "date-fns";
import { z } from "zod";

export const userFormSchema = {
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
};

export const academicEvaluationSchema = {
  yearsComment: z
    .string()
    .min(15, { message: "Your opinion must have 15 characters min." })
    .max(250, { message: "Your opinion must have 50 characters max." }),
  materialRating: z
    .number()
    .min(1, { message: "Your rating can't be below 1" })
    .max(5, { message: "Your rating can't be above 5" }),
  assistedToAllClasses: z.boolean(),
  preferredSchedules: z
    .array(z.enum(["monday", "tuesday", "wednesday", "thursday", "friday"]))
    .min(1, "Select at least 1 option")
    .max(2, "You can't select more than 2 options"),
};

export const techPreferencesSchema = {
  techComment: z
    .string()
    .min(20, { message: "Your answer must have 20 characters min." })
    .max(200, { message: "Your answer must have 200 characters max." }),
  favoriteOS: z.enum(["windows", "macos", "linux"], {
    required_error: "You must choose your favorite OS",
  }),
  userDevices: z
    .array(z.enum(["smartphone", "laptop", "tablet", "smartwatch"]))
    .min(1, "Select at least 1 option")
    .max(2, "You can't select more than 2 options"),
  learningTime: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    invalid_type_error: "You should select your learning time",
  }),
};

export const filmPreferencesSchema = {
  filmGenres: z
    .array(
      z
        .string()
        .min(2, { message: "Genre must have 2 characters min." })
        .max(50, { message: "Genre must have 50 characters max." })
    )
    .min(1, "Select at least 1 option"),
  favoriteFilm: z
    .string()
    .min(3, { message: "Film name must have 3 characters min." })
    .max(50, { message: "Film name must have 50 characters max." }),
  watchedFilms: z.array(
    z.enum(["Inception", "The Matrix", "Avengers", "Titanic"])
  ),
  frequencyWatchingFilms: z
    .number()
    .min(1, { message: "You should choose your frequency watching movies" })
    .max(5, { message: "You should choose your frequency watching movies" }),
};
