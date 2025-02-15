import { API_URL } from "@/config/api";

export async function fetchData<T>(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers as Record<string, string>),
    },
    next: { revalidate: 60 },
  });

  let body: T | null = null;

  try {
    body = (await response.json()) as T;
  } catch (error) {
    console.error("Could not parse the response body as JSON", error);
  }

  if (!response.ok || body == null) {
    console.warn("Response body:", JSON.stringify(body, null, 2));
    throw new Error(response.statusText);
  }

  return body;
}
