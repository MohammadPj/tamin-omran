import React, { FC, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import { getDictionary } from "~/i18n";
import { useQueryObject } from "~/hooks/useQueryObject";
import TextField from "@mui/material/TextField";

interface EnginNumberProps {}
const EnginNumber: FC<EnginNumberProps> = () => {
  const dictionary = getDictionary();

  const { debounceAddTextQuery, query } = useQueryObject();

  const [isOpen, setIsOpen] = useState(!!query?.engineNumber);

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pl={2}
        sx={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography fontWeight={500} fontSize={16}>
          {dictionary("common.enginNumber")}
        </Typography>
        <SvgArrowDown
          width={24}
          height={24}
          style={{ transform: isOpen ? "scaleY(-1)" : "scaleY(1)" }}
        />
      </Box>

      <Collapse in={isOpen}>
        <Box mt={5}>
          <TextField
            variant={"filled"}
            size={"small"}
            fullWidth
            placeholder={dictionary("common.enginNumberPlaceholder")}
            defaultValue={query?.engineNumber}
            onChange={(e) =>
              debounceAddTextQuery({
                queryName: "engineNumber",
                value: e.target.value,
              })
            }
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default EnginNumber;
