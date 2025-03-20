// función que crea un array de números entre 1 y n
export const arrayFrom = (max: number) =>
  Array.from({ length: max }, (_, i) => i + 1);
