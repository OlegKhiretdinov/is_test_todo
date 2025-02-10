const baseUrl = "http://localhost:3001/seminars";

export const seminarsListRequest = async () => {
  const data = await fetch(baseUrl, {
    method: "GET",
  });

  return data.json();
};

export const deleteSeminar = async (id: string) => {
  const data = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

  return data.json();
};

export const editSeminar = async () => {
  const data = await fetch(baseUrl, {
    method: "PUT",
    body: JSON.stringify({}),
  });

  return data.json();
};
