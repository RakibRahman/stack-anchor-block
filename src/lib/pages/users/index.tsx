import { useState } from 'react';

import NumberPagination from '@/lib/components/common/pagination/Pagination';
import { useGetUsersQuery } from '@/services/auth';
import Dots from 'assets/images/dots.png';

const Users = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetUsersQuery(page);
  const columns = [
    {
      name: '#ID',
      id: 1,
    },
    {
      name: 'User',
      id: 2,
    },
    {
      name: 'EMAIL',
      id: 3,
    },
    {
      name: 'OPTIONS',
      id: 4,
    },
  ];

  const tableData = data?.data.length ? data.data : [];
  console.log(data);

  return (
    <div className="mt-10">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col) => (
                <th scope="col" key={col.id} className="px-6 py-3">
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th> */}
            {tableData.map((td) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={td.id}
              >
                <td className="px-6 py-4 text-[#4E5D78] font-semibold text-base">
                  {td.id}
                </td>
                <td className="px-6 py-4 flex gap-2 items-center">
                  <img
                    src={td.avatar}
                    alt="profile pic"
                    className="w-[60px] h-[60px] object-cover rounded-[15px]"
                  />

                  <p className="text-[#4E5D78] font-semibold text-base">
                    {' '}
                    {`${td.first_name} ${td.last_name}`}
                  </p>
                </td>
                <td className="px-6 py-4 text-[#4E5D78] font-semibold text-base">
                  {td.email}
                </td>
                <td className="px-6 py-4">
                  {' '}
                  <img src={Dots} alt="dot menu" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {tableData.length ? (
          <NumberPagination
            currentPage={page}
            totalCount={data?.total ?? 1}
            pageSize={data?.per_page}
            onPageChange={(page: number) => setPage(page)}
            totalPages={data?.total_pages ?? 1}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Users;
