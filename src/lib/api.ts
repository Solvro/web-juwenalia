import { API_URL } from "@/config/api";

type RequestOptions = {
  allowStatus0?: boolean;
  headers?: Record<string, string>;
} & Omit<RequestInit, "headers">;

const isAbsolutePath = (url: string) => /^https?:\/\//.test(url);

export class FetchError extends Error {}

export async function fetchData<T>(
  endpoint: string,
  options: RequestOptions = {},
) {
  if (["POST", "PUT", "PATCH"].includes(options.method ?? "")) {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }
  const response = await fetch(
    isAbsolutePath(endpoint) ? endpoint : `${API_URL}/${endpoint}`,
    {
      ...options,
      next: { revalidate: 60 },
    },
  );

  let body: T | null = null;

  try {
    body = (await response.json()) as T;
  } catch (error) {
    console.warn("Could not parse the response body as JSON", error);
  }
  if (!response.ok || body == null) {
    console.error("Response body:", JSON.stringify(body, null, 2));
    throw new FetchError(response.statusText);
  }

  return body;
}
