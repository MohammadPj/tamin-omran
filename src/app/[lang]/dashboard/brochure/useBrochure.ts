import useTable from "~/components/custom-mui/custom-table/components/useTable";
import { IBrochure } from "~/types/brochure";
import useBrochureColumn from "~/app/[lang]/dashboard/brochure/useBrochureColumn";
import {useGetBrochureTypes} from "~/services/api/hooks";
import {useCommon} from "~/store/common/commonSlice";

const useBrochure = () => {
  const {lang} = useCommon()
  const {data: brochureTypes} = useGetBrochureTypes({lang})

  const { columns } = useBrochureColumn();

  const data: IBrochure[] = [
    {
      id: 1,
      title: "قطعه اق ممد",
      admin: { firstName: "محمد", lastName: "محمدی" },
      createDate: new Date(),
      category: "دسته بندی",
    },
    {
      id: 2,
      title: "قطعه اق ممد",
      admin: { firstName: "محمد", lastName: "محمدی" },
      createDate: new Date(),
      category: "دسته بندی",
    },
    {
      id: 3,
      title: "قطعه اق ممد",
      admin: { firstName: "محمد", lastName: "محمدی" },
      createDate: new Date(),
      category: "دسته بندی",
    },
    {
      id: 4,
      title: "قطعه اق ممد",
      admin: { firstName: "محمد", lastName: "محمدی" },
      createDate: new Date(),
      category: "دسته بندی",
    },
  ];

  const { table } = useTable({ data: [], columns });
  return { table };
};

export default useBrochure;
