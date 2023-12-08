import useTable from "~/components/custom-mui/custom-table/components/useTable";
import useProductColumn from "~/app/[lang]/dashboard/product/_components/useProductColumn";
import {IProduct} from "~/types/product";
import {ICreateProductForm} from "~/app/[lang]/dashboard/product/_components/create-product/CreateProduct";

const useProduct = () => {
  const handleCreateProduct = (value: ICreateProductForm) => {
    console.log('value', value)
    // setModal(null);
  };

  const {columns} = useProductColumn()

  const data: IProduct[] = [
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
  ]

  const {table} = useTable({data, columns})
  return {table, handleCreateProduct}
};

export default useProduct;
