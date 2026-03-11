import { SOLVRO_API_URL } from "@/config/api";

import { FetchError, fetchData } from "./api";
import type { Person } from "./types";

interface JuwenaliaResponseType {
  data: {
    cms_id: string;
  }[];
}

interface SolvroResponseType {
  data: {
    name: string;
    photo: string;
  }[];
}

export async function fetchCreators(): Promise<Person[]> {
  const response: JuwenaliaResponseType =
    await fetchData<JuwenaliaResponseType>("items/creators?fields=cms_id");

  const ids = response.data.map((item) => item.cms_id);

  const creatorsResponse = await fetch(
    `${SOLVRO_API_URL}/items/Team?fields=name,photo&filter[id][_in]=${ids.join(",")}`,
    {
      next: { revalidate: 60 },
    },
  );

  let body: SolvroResponseType | null = null;

  try {
    body = (await creatorsResponse.json()) as SolvroResponseType;
  } catch (error) {
    console.warn("Could not parse the response body as JSON", error);
  }
  if (!creatorsResponse.ok || body == null) {
    console.error("Response body:", JSON.stringify(body, null, 2));
    throw new FetchError(creatorsResponse.statusText);
  }

  return body.data.map((creator) => {
    return {
      name: creator.name,
      image: creator.photo,
      role: "Twórca strony",
    };
  });
}
