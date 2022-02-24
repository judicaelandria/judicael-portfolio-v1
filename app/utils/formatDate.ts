export const formatDate = (date: string | Date) => {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  } as unknown as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat(navigator.language, options).format(
    new Date(date)
  );
};
