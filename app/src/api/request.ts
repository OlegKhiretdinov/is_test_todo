import { TSeminar } from "../components/Seminar/seminar.types";

const baseUrl = "http://localhost:3001/seminars";

export const seminarsListRequest = async () => {
  const data = await fetch(baseUrl, {
    method: "GET",
  });

  return data.json();
};

export const deleteSeminarRequest = async (id: string) => {
  return await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};

export const editSeminarRequest = async ({id, ...rest}: TSeminar) => {
  return await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(rest),
  });
};
