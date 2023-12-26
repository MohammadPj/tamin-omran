import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";

interface ConfirmDeleteProps {
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmDelete: FC<ConfirmDeleteProps> = ({onConfirm, onCancel}) => {
  return (
    <Box>
      <Typography mb={8} mt={4}>آیا از حذف این مورد اطمینان دارید</Typography>

      <Box display={'flex'} justifyContent={'space-between'}>
        <Button onClick={onConfirm}>تایید</Button>
        <Button onClick={onCancel} variant={'outlined'}>انصراف</Button>
      </Box>
    </Box>
  );
};

export default ConfirmDelete;
