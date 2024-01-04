"use client";
import React, { FC } from "react";
import { Pagination, PaginationProps } from "@mui/material";
import { usePathname } from "next/navigation";
import { useQueryObject } from "~/hooks/useQueryObject";

interface CustomPaginationProps extends PaginationProps {}

const CustomPagination: FC<CustomPaginationProps> = ({ page, ...rest }) => {
  const pathname = usePathname();

  const { query, setQuery } = useQueryObject();

  const handleChangePage = (e: any, page: any) => {
    const newQuery = {
      ...query,
      page: page,
    };

    setQuery(newQuery);
  };

  return (
    <div>
      <Pagination
        onChange={handleChangePage}
        page={page || Number(query?.page) || 1}
        shape={"rounded"}
        variant="outlined"
        {...rest}
      />
    </div>
  );
};

export default CustomPagination;
