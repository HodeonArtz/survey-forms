import { createFormContext } from "@mantine/form";

export interface FormValues {
  userName: string;
  userDOB: string;
  userEmail: string;
  userGenre: string;
  userPreferences: string[];
  yearsComment: string;
  materialRating: number;
  assistedToAllClasses: boolean;
  preferredSchedules: (
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
  )[];
  techComment: string;
  favoriteOS?: "💻 Windows" | "🍎 MacOS" | "🐧 Linux";
  userDevices: ("smartphone" | "laptop" | "tablet" | "smartwatch")[];
  learningTime?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  filmGenres: string[];
  favoriteFilm: string;
  watchedFilms: ("Inception" | "The Matrix" | "Avengers" | "Titanic")[];
  frequencyWatchingFilms: number;
}

export const [SurveeFormProvider, useSurveeFormContext, useSurveeForm] =
  createFormContext<FormValues>();

export const formInitialValues: FormValues = {
  userName: "",
  userDOB: "",
  userEmail: "",
  userGenre: "",
  userPreferences: ["🎬 Watch movies", "📕 Read books"],
  yearsComment: "",
  materialRating: 3,
  assistedToAllClasses: true,
  preferredSchedules: [],
  techComment: "",
  favoriteOS: undefined,
  userDevices: [],
  learningTime: undefined,
  filmGenres: [],
  favoriteFilm: "",
  watchedFilms: [],
  frequencyWatchingFilms: 3,
};
