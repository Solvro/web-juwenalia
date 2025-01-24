import { NoDataInfo } from "@/components/no-data-info";

const ERROR_MESSAGES = {
  network: {
    title: "Błąd sieciowy",
    message:
      "Nie udało się pobrać postów z Facebooka. Spróbuj ponownie później.",
  },
  noPosts: {
    title: "Brak postów",
    message: "Nie ma obecnie żadnych postów do wyświetlenia.",
  },
};

export function NewsErrorMessage({
  type,
}: {
  type: keyof typeof ERROR_MESSAGES;
}) {
  const error = ERROR_MESSAGES[type];
  return <NoDataInfo errorTitle={error.title} errorMessage={error.message} />;
}
