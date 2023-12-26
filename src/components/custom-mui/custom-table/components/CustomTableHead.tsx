import React, { FC } from "react";

//@3rd Party
import { flexRender } from "@tanstack/react-table";
import { Table as TableType } from "@tanstack/table-core/build/lib/types";
//-------------------------------------------------------------------------

//@Mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
//-------------------------------------------------------------------------

interface Props {
  table: TableType<any>;
}

const CustomTableHead: FC<Props> = ({ table }) => {
  return (
    <TableHead
      sx={{
        "& th:first-of-type": {
          borderRadius: "1em 0 0 1em",
        },
        "& th:last-child": {
          borderRadius: "0 1em 1em 0",
        },
        "& th": {
          fontSize: 10,
          fontWeight: 700,
          lineHeight: "13px",
          textAlign: "center",
          p: 2.5,

          "& div": {
            px: "0 !important",
          },
        },
        "& .MuiTableCell-head": {
          height: 46,
          maxHeight: 46,
          p: 0,
        },
      }}
    >
      {table?.getHeaderGroups()?.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup?.headers?.map((header, i) => (
            <TableCell
              key={header?.id}
              colSpan={header?.colSpan}
              sx={{
                '&.MuiTableCell-head': {
                  border: "none",
                  pb: 2,
                }
              }}
            >
              {header?.isPlaceholder ? null : (
                <Box
                  display={"flex"}
                  minWidth="max-content"
                  textAlign={"center"}
                  justifyContent={
                    i === 0
                      ? "left"
                      : i === headerGroup?.headers?.length - 1
                      ? "right"
                      : "center"
                  }
                >
                  <Typography fontWeight={700} fontSize={14}>
                    {flexRender(
                      header?.column?.columnDef?.header,
                      header?.getContext()
                    )}
                  </Typography>
                </Box>
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default CustomTableHead;
