import React, {useState} from 'react';
import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {useGetEngineNumber} from "~/services/api/hooks";
import useEngineColumn from "~/app/[lang]/dashboard/product/engine/_components/useEngineColumn";

const useEngine = () => {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const {columns} = useEngineColumn()

  const {data: engineNumbers} = useGetEngineNumber()

  const { table } = useTable({ data: engineNumbers?.data, columns });

  return {table, page, setPage, limit, setLimit, count: engineNumbers?.meta.totalPages}
};

export default useEngine;
