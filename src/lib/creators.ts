import { SOLVRO_API_URL } from "@/config/api";

import { fetchData } from "./api";
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
  const response = await fetchData<JuwenaliaResponseType>(
    "items/creators?fields=cms_id",
  );

  const ids = response.data.map((item) => item.cms_id);

  const parameters = new URLSearchParams({ fields: "name, photo" });

  if (ids.length > 0) {
    parameters.append("filter[id][_in]", ids.join(","));
  } else {
    return [];
  }

  const creatorsResponse = await fetchData<SolvroResponseType>(
    `${SOLVRO_API_URL}/items/Team?${parameters.toString()}`,
  );

  return creatorsResponse.data.map((creator) => {
    return {
      name: creator.name,
      image: creator.photo,
      role: "Twórca strony",
      isCreator: true,
      edition: "2026",
    };
  });
}
