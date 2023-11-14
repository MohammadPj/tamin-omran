import React, { useEffect } from "react";

//@Mui
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { Pagination, SxProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//------------------------------------------------------------------------------------

//@Components
import { Row, Table as TableType } from "@tanstack/react-table";
import TableHeader from "~/components/custom-mui/custom-table/components/TableHeader";
import SearchAndFilter from "~/components/custom-mui/custom-table/components/SearchAndFilter";
import CustomTableHead from "~/components/custom-mui/custom-table/components/CustomTableHead";
import CustomTableBody from "~/components/custom-mui/custom-table/components/CustomTableBody";

//------------------------------------------------------------------------------------
//@Icons

export interface ICustomTable<T> {
  id?: string;
  table: TableType<T>;
  sx?: SxProps;
  isLoading?: boolean;
  onClickRow?: (row: Row<any>) => void;
  onChangePage?: (e: any, page: number) => void;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  tableFilterItems?: { title: string; component: React.ReactNode }[];
  leftTitle?: React.ReactNode;
  onSearch?: (search: string) => void;
}

function CustomTable<T>({
  id,
  table,
  onChangePage,
  onClickRow,
  isLoading,
  sx,
  tableFilterItems,
  leftTitle,
  onSearch,
  page,
  pageSize = 10,
  pageCount,
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
        border: '1px solid',
        borderColor: 'n.1',
        bgcolor: 'background.1',
        ...sx,
      }}
    >
      <>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          zIndex={20}
        >
          <Box width={'100%'} display={"flex"} justifyContent={'space-between'} alignItems={'center'} gap={4}>
            <SearchAndFilter
              handleSearchTable={(e) =>
                onSearch ? onSearch(e.target.value) : null
              }
              filterItems={tableFilterItems}
            />

            {leftTitle}
          </Box>
        </Box>

      </>

      <Box width={"100%"} display={"flex"} gap={2} mb={6}>


        <Box flexGrow={1} />
      </Box>

      <TableContainer
        sx={{ flexGrow: "1", height: 0, overflowX: "unset", overflowY: "auto", border: '1px solid', borderColor: 'n.1', borderRadius: 2 }}
      >
        <Table sx={{ position: "relative" }}>
          <CustomTableHead table={table} />

          {isLoading ? (
            <TableBody sx={{ height: "150px", width: "100%" }}>
              <>
                {Array.from({ length: 10 }).map((item, index: number) => (
                  <TableRow key={index}>
                    {table?.getHeaderGroups()[0]?.headers?.map((col, index) => (
                      <TableCell key={index}>
                        <Box>
                          {index === 0 ? (
                            <Skeleton
                              sx={{ borderRadius: 1 }}
                              animation="wave"
                              width="17px"
                              height={"16px"}
                              variant="rectangular"
                            />
                          ) : (
                            <Skeleton
                              sx={{ borderRadius: 1 }}
                              animation="wave"
                              width="100%"
                              variant="rectangular"
                            />
                          )}
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            </TableBody>
          ) : (
            <CustomTableBody
              table={table}
              onClickRow={onClickRow}
              pageSize={pageSize}
            />
          )}
        </Table>
      </TableContainer>

      {pageCount && pageCount > 1 && (
        <Pagination
          page={page || 1}
          onChange={onChangePage}
          count={pageCount}
        />
      )}
    </Stack>
  );
}
export default CustomTable;
