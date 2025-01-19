import { API_URL } from "@/config/api";

export async function fetchData<T>(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      // eslint-disable-next-line @typescript-eslint/no-misused-spread
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
}
