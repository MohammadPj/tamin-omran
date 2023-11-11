import React, { cloneElement, FC, Fragment, ReactElement } from "react";
import { flexRender, Row } from "@tanstack/react-table";
import { TableCell, TableRow } from "@mui/material";
import Box from "@mui/material/Box";
import { Table as TableType } from "@tanstack/table-core/build/lib/types";

interface Props {
  row: Row<any>;
  table: TableType<any>;
  onClickRow?: (row: Row<any>) => void;
  noBorder?: boolean;
}
const CustomTableRow: FC<Props> = ({ row, table, onClickRow, noBorder }) => {
  return (
    <TableRow
      key={row.id}
      id={`tr-${row.index}`}
      onClick={() => (onClickRow ? onClickRow(row) : "")}
      sx={{
        height: "1px",
        background: row.getIsSelected()
          ? (theme) => theme.palette.background["2"]
          : "unset",
        cursor: onClickRow ? "pointer" : "",
        borderBottom: noBorder ? "" : "1px solid #EBEBEB",
        "& td:first-of-type>div": { borderRadius: "10px 0 0 10px" },
        "& td:last-child>div": { borderRadius: "0 10px 10px 0" },
        "&:hover": {
          borderBottom: noBorder ? "" : "1px solid transparent",
          "& td > div": {
            background: (theme) => theme.palette.background["2"],
          },
        },
      }}
    >
      {row?.getVisibleCells()?.map((cell, index) => {
        return (
          <TableCell
            key={cell?.id}
            id={`c-${index}`}
            sx={{
              px: 0,
              pt: 2,
              pb: 1,
              width: cell?.getContext()?.column?.id === "select" ? 50 : 150,
              border: "none",
              height: "inherit",
            }}
          >
            <Box
              sx={{
                justifyContent:
                  cell?.getContext()?.column?.id === "select"
                    ? "left"
                    : "center",
                height: "100%",
                fontSize: 10,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                py: 2,
                px: cell?.getContext()?.column?.id === "select" ? 0 : 4,
              }}
            >
              {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
            </Box>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default CustomTableRow;
