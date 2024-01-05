import React from "react";

//@Mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { Pagination, SxProps } from "@mui/material";
//------------------------------------------------------------------------------------

//@Components
import { Row, Table as TableType } from "@tanstack/react-table";
import SearchAndFilter from "~/components/custom-mui/custom-table/components/SearchAndFilter";
import CustomTableHead from "~/components/custom-mui/custom-table/components/CustomTableHead";
import CustomTableBody from "~/components/custom-mui/custom-table/components/CustomTableBody";
import TableLimitation from "~/components/custom-mui/custom-table/components/TablePageSize";
import TableLoading from "~/components/custom-mui/custom-table/components/TableLoading";
import CustomPagination from "~/components/common/custom-pagination/CustomPagination";

//------------------------------------------------------------------------------------
//@Icons

export interface ICustomTable<T> {
  id?: string;
  table: TableType<T>;
  sx?: SxProps;
  isLoading?: boolean;
  onClickRow?: (row: Row<any>) => void;
  onChangePage?: (e: any, page: number) => void;
  onChangePageSize?: (size: number) => void;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  onClickFilter?: () => void;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode
  onSearch?: (search: string) => void;
}

function CustomTable<T>({
  id,
  table,
  onChangePage,
  onClickRow,
  isLoading,
  sx,
  onClickFilter,
  leftContent,
  rightContent,
  onSearch,
  page,
  pageCount,
  pageSize = 10,
  onChangePageSize,
}: ICustomTable<T>) {
  return (
    <Stack
      id={id}
      data-cy={id}
      sx={{
        minHeight: "500px",
        flexGrow: 1,
        height: "100%",
        width: "100%",
        borderRadius: 2,
        p: 4,
        border: "1px solid",
        borderColor: "n.1",
        bgcolor: "background.1",
        ...sx,
      }}
    >
      <>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          zIndex={20}
          mb={5}
        >
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={4}
          >
            {rightContent || <Box />}

            {leftContent}
          </Box>
        </Box>
      </>

      <TableContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          height: 0,
          overflowX: "unset",
          overflowY: "auto",
          border: "1px solid",
          borderColor: "n.1",
          borderRadius: 2,
          p: 4,
        }}
      >
        <Table sx={{ position: "relative" }}>
          <CustomTableHead table={table} />

          {isLoading ? (
            <TableLoading table={table} />
          ) : (
            <CustomTableBody table={table} onClickRow={onClickRow} />
          )}
        </Table>

        <Box flexGrow={1} />

        <Box display={"flex"} justifyContent={"space-between"}>
          {pageCount && pageCount > 1 ? (

            <Pagination
              variant={"outlined"}
              shape={"rounded"}
              page={page || 1}
              onChange={onChangePage}
              count={pageCount}
              size={"small"}
            />
          ) : <Box />}

          <TableLimitation
            onChangePageSize={onChangePageSize}
            pageSize={pageSize}
          />
        </Box>
      </TableContainer>
    </Stack>
  );
}
export default CustomTable;
