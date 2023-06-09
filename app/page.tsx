import AllTherapistsTable from './components/AllTherapistsTable';
import useFetchAllTherapists from './fetchRequests/useFetchAllTherapists';

export default async function Home() {
  const data = await useFetchAllTherapists();

  return (
    <main>
      <div className="flex flex-col p-[20px]">
        <h1 className="font-bold uppercase text-[20px] text-center">
          Records:{data.data.allTherapists.length}
        </h1>
        <AllTherapistsTable data={data.data.allTherapists} />
      </div>
    </main>
  );
}
