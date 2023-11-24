import {ColumnDef} from "@tanstack/react-table";
import {IArticle} from "~/types/article";
import SvgPlus from "~/components/icons/final/Plus";
// import SvgFilter from "~/components/icons/final/Filter";

const useArticleColumn = () => {
  const columns: ColumnDef<IArticle, any>[] = [
    {
      header: "شماره",
      accessorKey: 'id',
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام مقاله",
      accessorKey: "title",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "تاریخ بارگذاری",
      accessorKey: "lastUpdate",
      cell: (cell) => cell.getValue().toLocaleDateString('fa-IR'),
    },
    {
      header: "ادمین",
      accessorKey: "admin",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "عملیات",
      id: "action",
      cell: (cell) => <SvgPlus width={14} />,
    },
  ];

  return {columns};
};

export default useArticleColumn;
