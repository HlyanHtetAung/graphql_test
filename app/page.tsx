import useFetchAllTherapists from "./fetchRequests/useFetchAllTherapists";

export default async function Home() {
  const data = await useFetchAllTherapists();

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold uppercase text-[20px]">
          Records:{data.data.allTherapists.length}
        </h1>
        {data.data.allTherapists.map((therapists: any, index: any) => (
          <div key={index}>
            <div className="flex flex-col items-center gap-[20px]">
              <p>{therapists.first_name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
