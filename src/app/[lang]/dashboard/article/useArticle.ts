import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {IArticle} from "~/types/article";
import useArticleColumn from "~/app/[lang]/dashboard/article/useArticleColumn";

const useArticle = () => {
  const {columns} = useArticleColumn()

  const data: IArticle[] = [
    {
      id: 1,
      title: 'قطعه اق ممد',
      admin: 'گل اقا',
      lastUpdate: new Date(),
    },
    {
      id: 2,
      title: 'قطعه اق ممد',
      admin: 'گل اقا',
      lastUpdate: new Date(),
    },
    {
      id: 3,
      title: 'قطعه اق ممد',
      admin: 'گل اقا',
      lastUpdate: new Date(),
    },
    {
      id: 4,
      title: 'قطعه اق ممد',
      admin: 'گل اقا',
      lastUpdate: new Date(),
    },
  ]

  const {table} = useTable({data, columns})
  return {table}
};

export default useArticle;
