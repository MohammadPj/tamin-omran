import React, {FC} from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import TableBody from "@mui/material/TableBody";
import {Table} from "@tanstack/table-core";

interface Props {
  table: Table<any>
}

const TableLoading: FC<Props> = ({table}) => {
  return (
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
  );
};

export default TableLoading;
