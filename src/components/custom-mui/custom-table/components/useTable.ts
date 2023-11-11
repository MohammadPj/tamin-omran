import { useState } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";
import {get} from "~/utils/methods";

interface IProps {
  columns: ColumnDef<any, any>[];
  data: any;
  multiSelect?: boolean;
  onSelectRow?: (data: any) => void;
  getRowId?: string;
}

const useTable = (props: IProps) => {
  // ==================================== Table ================================================
  const [selectedRows, setSelectedRows] = useState<Row<any>[]>([]);

  const getRowInCurrentPage = (id: string) => {
    return table.getRowModel()?.rowsById?.[id];
  };

  const getRowInOtherPage = (id: string) => {
    return selectedRows?.find((row: any) => row?.id === id);
  };

  const handleSelectRow = (row: any) => {
    setRowSelection(row);

    setRowSelection((old: any) => {
      const selectedRowIds = Object?.keys(old);

      if (selectedRowIds) {
        // @ts-ignore
        setSelectedRows((prv) => {
          const newSelectedRows = selectedRowIds.map((id) => {
            return table?.getRowModel()?.rowsById?.[id]
              ? getRowInCurrentPage(id)
              : getRowInOtherPage(id);
          });

          if (props?.onSelectRow) {
            props?.onSelectRow(newSelectedRows);
          }
          return newSelectedRows;
        });
      }

      return old;
    });
  };

  //selection
  const [rowSelection, setRowSelection] = useState<any>({});

  //generate table with react-table
  const table = useReactTable({
    data: props.data || [],
    columns: props.columns,
    enableMultiRowSelection: props.multiSelect,
    state: {
      rowSelection,
    },
    manualPagination: true,
    getRowId: (row) => row.id,
    onRowSelectionChange: (row) => handleSelectRow(row),
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    table,
    selectedRows,
  };
};

export default useTable;
