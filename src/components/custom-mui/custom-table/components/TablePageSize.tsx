import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import {InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

interface Props {
  pageSize?: number;
  onChangePageSize?: (size: number) => void
}

const TablePageSize: FC<Props> = ({onChangePageSize, pageSize = 10}) => {
  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <Typography fontWeight={400} fontSize={14} color={"n.3"}>
        تعداد سطر در هر صفحه
      </Typography>

      <FormControl>
        <InputLabel id="demo-simple-select-label">10</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ width: 70 }}
          size={"small"}
          variant={"filled"}
          value={pageSize}
          onChange={e => onChangePageSize ? onChangePageSize(Number(e.target.value)) : {}}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TablePageSize;
