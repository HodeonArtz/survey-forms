import {
  IconDeviceDesktop,
  IconMovie,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import { HTMLInputTypeAttribute, ReactNode } from "react";

interface BaseQuestion {
  id: string;
  type: "text" | "select" | "check" | "textarea";
  inputType: HTMLInputTypeAttribute | "select" | "textarea" | "button";
  question: string;
  answer: string | string[];
  constraints?: {
    min?: number;
    max?: number;
  };
  validation?: {
    min_age?: number;
    format?: string;
    domain?: string;
    max_selected?: number;
  };
}
interface SelectQuestion extends BaseQuestion {
  type: "select";
  inputType: SelectQuestion["type"];
  options: string[] | { group: string; values: string[] }[];
}

interface CheckQuestion extends BaseQuestion {
  type: "check";
  inputType: "checkbox";
  options: string[];
}

type Question = BaseQuestion | SelectQuestion | CheckQuestion;

interface Survey {
  title: string;
  icon: ReactNode;
  questions: Question[];
}

export const cuestionarios: Survey[] = [
  {
    title: "Cuestionario de Datos del Usuario",
    icon: <IconUser />,
    questions: [
      {
        id: "nombre",
        type: "text",
        inputType: "text",
        question: "¿Cuál es tu nombre?",
        answer: "",
        constraints: {
          min: 3,
          max: 50,
        },
      },
      {
        id: "fecha_nacimiento",
        type: "text",
        inputType: "date",
        question: "¿Cuál es tu fecha de nacimiento?",
        answer: "",
        constraints: {
          min: 1,
          max: 10,
        },
        validation: {
          min_age: 17,
        },
      },
      {
        id: "email",
        type: "text",
        inputType: "email",
        question: "¿Cuál es tu correo electrónico?",
        answer: "",
        constraints: {
          min: 5,
          max: 100,
        },
        validation: {
          format: "email",
          domain: "stucom.com",
        },
      },
      {
        id: "sexo",
        type: "select",
        inputType: "select",
        question: "¿Cuál es tu sexo?",
        answer: "",
        options: ["Masculino", "Femenino", "Otro"],
      },
      {
        id: "preferencias",
        type: "check",
        inputType: "checkbox",
        question: "¿Qué prefieres hacer en tu tiempo libre?",
        answer: "",
        options: ["Leer", "Deportes", "Viajar", "Cine"],
      },
    ],
  },
  {
    title: "Cuestionario de Evaluación Académica",
    icon: <IconSchool />,
    questions: [
      {
        id: "comentarios",
        type: "textarea",
        inputType: "text",
        question: "¿Qué mejorarías en el curso?",
        answer:
          "El contenido del curso está bien, pero sería útil más ejemplos prácticos.",
        constraints: {
          min: 15,
          max: 250,
        },
      },
      {
        id: "satisfaccion",
        type: "select",
        inputType: "select",
        question: "¿Qué tan satisfecho estás con el contenido del curso?",
        answer: "4",
        options: ["1", "2", "3", "4", "5"],
      },
      {
        id: "asistencia",
        type: "check",
        inputType: "checkbox",
        question: "¿Asististe a todas las clases?",
        answer: "no",
        options: ["sí", "no"],
      },
      {
        id: "horarios",
        type: "check",
        inputType: "checkbox",
        question:
          "¿Cuáles horarios prefieres para las clases? (Selecciona hasta 2 options)",
        answer: [],
        options: [
          "Lunes 9:00 AM - 11:00 AM",
          "Martes 3:00 PM - 5:00 PM",
          "Miércoles 10:00 AM - 12:00 PM",
          "Jueves 1:00 PM - 3:00 PM",
          "Viernes 4:00 PM - 6:00 PM",
        ],
        validation: {
          max_selected: 2,
        },
      },
    ],
  },
  {
    title: "Encuesta de Preferencias en Tecnología",
    icon: <IconDeviceDesktop />,
    questions: [
      {
        id: "comentarios",
        type: "textarea",
        inputType: "textarea",
        question: "¿Qué tecnología te gustaría aprender en el futuro?",
        answer:
          "Me gustaría aprender sobre inteligencia artificial y machine learning.",
        constraints: {
          min: 20,
          max: 200,
        },
      },
      {
        id: "sistema_operativo",
        type: "select",
        inputType: "select",
        question: "¿Qué sistema operativo prefieres usar?",
        answer: "Linux",
        options: ["Windows", "Linux", "MacOS"],
      },
      {
        id: "productos",
        type: "check",
        inputType: "checkbox",
        question:
          "¿Qué dispositivos usas regularmente? (Selecciona hasta 2 options)",
        answer: ["smartphone"],
        options: ["smartphone", "laptop", "tablet", "smartwatch"],
        validation: {
          max_selected: 2,
        },
      },
      {
        id: "tiempo",
        type: "select",
        inputType: "select",
        question:
          "¿Cuántas horas a la semana dedicas a aprender sobre tecnología?",
        answer: "5",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
    ],
  },
  {
    title: "Encuesta de Preferencias de Cine",
    icon: <IconMovie />,
    questions: [
      {
        id: "comentarios",
        type: "textarea",
        inputType: "textarea",
        question: "¿Qué género de películas prefieres?",
        answer: "Acción, ciencia ficción y comedia.",
        constraints: {
          min: 10,
          max: 150,
        },
      },
      {
        id: "favorito",
        type: "select",
        inputType: "select",
        question: "¿Cuál es tu película favorita?",
        answer: "Inception",
        options: ["Inception", "The Matrix", "Avengers", "Titanic"],
      },
      {
        id: "vista",
        type: "check",
        inputType: "checkbox",
        question: "¿Has visto alguna de las siguientes películas?",
        answer: "sí",
        options: ["Inception", "The Matrix", "Avengers", "Titanic"],
      },
      {
        id: "frecuencia",
        type: "select",
        inputType: "select",
        question: "¿Con qué frecuencia ves películas?",
        answer: "4",
        options: [
          {
            group: "Opción 1-5 veces al mes",
            values: ["1", "2", "3", "4", "5"],
          },
        ],
      },
    ],
  },
];
