const baseUrl = "http://localhost:3001/seminars";

export const seminarsListRequest = async () => {
  const data = await fetch(`${baseUrl}`, {
    method: "GET",
  });

  return data.json();
};
