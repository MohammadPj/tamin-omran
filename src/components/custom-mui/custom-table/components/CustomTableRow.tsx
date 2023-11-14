import React, { FC } from "react";
import { flexRender, Row } from "@tanstack/react-table";
import { TableCell, TableRow } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  row: Row<any>;
  onClickRow?: (row: Row<any>) => void;
}
const CustomTableRow: FC<Props> = ({ row, onClickRow }) => {
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
        "& td:first-of-type>div": { borderRadius: "8px 0 0 8px" },
        "& td:last-child>div": { borderRadius: "0 8px 8px 0" },
      }}
    >
      {row?.getVisibleCells()?.map((cell, index) => {
        return (
          <TableCell
            key={cell?.id}
            id={`c-${index}`}
            sx={{
              px: 0,
              py: 1,
              pl: index === 0 ? 4 : 0,
              pr: index === row?.getVisibleCells()?.length - 1 ? 4 : 0,
              width: index === 0 ? 50 : 150,
              border: "none",
              height: "inherit",
            }}
          >
            <Box
              sx={{
                justifyContent: index === 0 ? "left" : index === row?.getVisibleCells()?.length - 1 ? 'right' : "center",
                height: "100%",
                fontSize: 14,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                py: 4,
                borderTop: "1px solid",
                borderBottom: "1px solid",
                borderLeft: index === 0 ? "1px solid" : "unset",
                borderRight:
                  index === row?.getVisibleCells()?.length - 1
                    ? "1px solid"
                    : "unset",
                border: cell.row.index % 2 === 0 ? "unset" : "",
                borderColor: "n.1",
                px: 4,
                bgcolor: cell.row.index % 2 === 0 ? "background.main" : "unset",
                color: 'n.3'
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
