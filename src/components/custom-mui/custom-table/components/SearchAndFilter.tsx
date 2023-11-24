import React, { FC } from "react";

//@Mui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useSearchParams } from "next/navigation";
//------------------------------------------------------------

//@Icons
import SvgSearch from "~/components/icons/final/Search";
import SvgFilter from "~/components/icons/final/Filter";
import {useTheme} from "@mui/material";

interface ISearchAndFilterProps {
  handleSearchTable: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  onClickFilter?: () => void;
}

const SearchAndFilter: FC<ISearchAndFilterProps> = ({
  handleSearchTable,
  onClickFilter,
}) => {
  const theme = useTheme()

  //Handlers
  const debouncedChangeHandler = handleSearchTable;

  return (
    <Box display={"flex"} gap={4} alignItems="center">
      <TextField
        autoComplete="off"
        size={"small"}
        sx={{ width: 250 }}
        placeholder={"جست و جو"}
        onChange={debouncedChangeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SvgSearch width={17} height={17} primarycolor={theme.palette.grey["3"]} />
            </InputAdornment>
          ),
        }}
        variant={"filled"}
      />

      {onClickFilter && (
        <IconButton
          sx={{ minWidth: "30px", p: 1, background: "background.2" }}
          onClick={onClickFilter}
        >
          <SvgFilter />
        </IconButton>
      )}
    </Box>
  );
};

export default SearchAndFilter;
