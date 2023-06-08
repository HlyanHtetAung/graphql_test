const useFetchAllTherapists = async () => {
  const res = await fetch(
    "http://13.214.209.115:3000/graphql",

    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query GetAllTherapists {
                allTherapists {
                first_name
                last_name
                }
            }         
        `,
      }),
    }
  );
  const data = await res.json();

  return data;
};

export default useFetchAllTherapists;