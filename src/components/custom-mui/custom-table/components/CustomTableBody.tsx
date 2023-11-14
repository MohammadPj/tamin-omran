import React, { FC } from "react";

//@3rd Party
import {Row} from "@tanstack/react-table";
import { Table as TableType } from "@tanstack/table-core/build/lib/types";
//-----------------------------------------------------------------------------------------

//@Mui
import { TableBody } from "@mui/material";
import CustomTableRow from "~/components/custom-mui/custom-table/components/CustomTableRow";
//-----------------------------------------------------------------------------------------

interface Props {
  table: TableType<any>;
  onClickRow?: (row: Row<any>) => void;
  pageSize:number;
}

const CustomTableBody: FC<Props> = ({ table, onClickRow, pageSize }) => {
  return (
    <TableBody>
      {table
        ?.getRowModel()
        ?.rows.slice(0, pageSize)
        ?.map((row) => {
          return (
            <CustomTableRow
              key={row.id}
              onClickRow={onClickRow}
              row={row}
            />
          );
        })}
    </TableBody>
  );
};

export default CustomTableBody;
