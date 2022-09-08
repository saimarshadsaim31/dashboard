import TableRow from './TableRow';

const Table = () => {
  return (
    <table className='table-auto w-full bg-custom-white drop-shadow-lg'>
      {/* table head */}
      <thead className='h-[68px]'>
        <tr className='shadow-md'>
          <th class='text-custom-red text-[16px] text-start font-bold pl-4 pr-2'>
            Type <span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Order #<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Customer<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Zip code<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Order time<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Vendor<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Rider<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Order Amount<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
          <th class='text-custom-red text-[16px] text-start font-bold px-2'>
            Performance<span className='text-custom-gray font-bold'> ↑↓</span>
          </th>
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        <TableRow />
        <TableRow type='normal' smile />
        <TableRow type='normal' star />
        <TableRow type='normal' />
        <TableRow type='normal' smile />
        <TableRow type='normal' star />
        <TableRow star />
      </tbody>
    </table>
  );
};

export default Table;
