'use client';

import DataTable from 'react-data-table-component';

type TherapistDataType = {
  first_name: string;
  last_name: string;
  id: string;

  mobile_no: number;
};

type AllTherapistsTableProps = {
  data: TherapistDataType[];
};

const AllTherapistsTable = ({ data }: AllTherapistsTableProps) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: '60px', // override the row height
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    cells: {
      style: {},
    },
  };

  const columns = [
    {
      name: 'id',
      selector: (row: any) => row.id,
    },
    {
      name: 'First name',
      selector: (row: any) => row.first_name,
    },
    {
      name: 'Last name',
      selector: (row: any) => row.last_name,
    },
    {
      name: 'Mobile No',
      selector: (row: any) => row.mobile_no,
    },
  ];

  return (
    <DataTable
      title="All Therapists"
      columns={columns}
      data={data}
      fixedHeader
      pagination
      customStyles={customStyles}
    />
  );
};

export default AllTherapistsTable;
