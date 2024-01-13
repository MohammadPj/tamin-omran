"use client"
import React, {FC} from 'react';
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import useEngine from "~/app/[lang]/dashboard/product/engine/_components/useEngine";

interface EnginePageProps {

}

const EnginePage: FC<EnginePageProps> = () => {
  const {table, setPage, page, limit, setLimit, count} = useEngine()

  return (
    <>
      <CustomTable
        table={table}
        pageCount={count}
        page={page}
        onChangePage={(e, page) => setPage(page)}
        onChangePageSize={(limit) => {
          setPage(1);
          setLimit(limit);
        }}
        pageSize={limit}
      />
    </>
  );
};

export default EnginePage;
