import { DynamicSchedule } from "@/components/schedule/dynamic-schedule";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { fetchData } from "@/lib/api";
import type { DayProps } from "@/lib/types";

async function Schedule() {
  let days = null;
  try {
    const response = await fetchData<{ data: DayProps[] }>(
      "items/days?fields=*,events.*,events.location.*,events.artists.*,events.artists.artists_id.*",
    );
    days = response.data;
  } catch (error) {
    console.error(error);
    return (
      <div className="flex w-full justify-center p-4">
        <Alert className="w-1/2" variant="destructive">
          <AlertTitle>Błąd Sieciowy</AlertTitle>
          <AlertDescription>
            Nie udało się pobrać harmonogramu. Spróbuj ponownie później.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (days.length === 0) {
    return <div />;
  }

  return <DynamicSchedule daysList={days} />;
}

export { Schedule };
