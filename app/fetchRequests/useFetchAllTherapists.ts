const useFetchAllTherapists = async () => {
  const res = await fetch(
    'http://18.143.143.171:3000/graphql',

    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            query GetAllTherapists {
              allTherapists {
                id
                last_name
                middle_name
                mobile_no
                first_name
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
