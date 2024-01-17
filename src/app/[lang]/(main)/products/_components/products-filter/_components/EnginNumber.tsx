import React, { FC, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import { getDictionary } from "~/i18n";
import { useQueryObject } from "~/hooks/useQueryObject";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useGetEngineNumber} from "~/services/api/hooks";

interface EnginNumberProps {}
const EnginNumber: FC<EnginNumberProps> = () => {
  const dictionary = getDictionary();

  const { query, addCheckboxToQuery } = useQueryObject();

  const [isOpen, setIsOpen] = useState(!!query?.engineNumber);
  const {data: engineNumbers} = useGetEngineNumber()
  const engineIds = query?.engineNumber as string[] || []

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
          {engineNumbers?.data?.map((engineNumber) => (
            <Box key={engineNumber?._id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={engineIds?.findIndex(engineId => engineId === engineNumber._id) > -1}
                    onChange={(e) =>
                      addCheckboxToQuery({
                        queryName: "engineNumber",
                        checked: e.target.checked,
                        value: engineNumber._id,
                      })
                    }
                  />
                }
                label={engineNumber?.title}
              />
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default EnginNumber;
