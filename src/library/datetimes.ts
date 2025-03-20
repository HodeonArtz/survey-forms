// devuelve un string con una fecha formateada
export function getFormattedDate(dateString: string, locale: string = "es") {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day); // Mes en JS va de 0 a 11

  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
