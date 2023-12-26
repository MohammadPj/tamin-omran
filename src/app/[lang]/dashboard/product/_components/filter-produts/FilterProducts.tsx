import React, { FC } from "react";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

interface FilterProductsProps {
  onSubmit?: (data: IFilterProductsForm) => void;
  onCancel?: () => void;
}

export interface IFilterProductsForm {
  state: string;
  fromDate: string;
  endDate: string;
}

const FilterProducts: FC<FilterProductsProps> = ({ onSubmit, onCancel }) => {
  const form = useForm<IFilterProductsForm>();

  const inputList: IUseFormInput[] = [
    {
      name: "state",
      label: "وضعیت محصول",
      type: "select",
      placeholder: "هردو",
      options: [
        {label: 'هر دو', value: 'both'},
        {label: 'موجود', value: 'isAvailable'},
        {label: 'نا موجود', value: 'notAvailable'},
      ]
    },
  ];

  return (
    <div>
      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
      />

      <Box mt={4}>
        <Typography mb={2} fontWeight={500} fontSize={14} color={"n.3"}>
          تاریخ بارگذاری
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Typography fontWeight={500} fontSize={14} color={"n.3"}>
            از
          </Typography>
          <TextField {...form.register("fromDate")} />

          <Typography fontWeight={500} fontSize={14} color={"n.3"}>
            تا
          </Typography>
          <TextField {...form.register("endDate")} />
        </Box>
      </Box>

      <Box display={"flex"} gap={4} mt={12}>
        {onSubmit && (
          <Button
            onClick={form.handleSubmit(onSubmit)}
            sx={{ width: "100%", height: 41 }}
          >
            اعمال
          </Button>
        )}

        {onCancel && (
          <Button
            onClick={onCancel}
            variant={"outlined"}
            sx={{ width: "100%", height: 41 }}
          >
            انصراف
          </Button>
        )}
      </Box>
    </div>
  );
};

export default FilterProducts;
