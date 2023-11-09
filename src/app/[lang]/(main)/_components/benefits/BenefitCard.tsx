import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import SvgGear2 from "~/components/icons/final/Gear2";
import { useCommon } from "~/store/common/commonSlice";

interface Props {
  title: string;
  description: string;
  index: number;
}

const BenefitCard: FC<Props> = ({ title, description, index }) => {
  const { isRtl } = useCommon();

  return (
    <Box
      minHeight={{ xs: "none", sm: 280 }}
      py={{xs: 2, sm: 9}}
      px={3}
      flexGrow={1}
      bgcolor={"background.2"}
      borderRadius={1}
    >
      <Box mb={{xs: 0, sm: 4}}>
        <Box display={"flex"} alignItems={"end"} gap={2}>
          <Box position={"relative"} display={"flex"} mb={-1} ml={-1}>
            <Typography
              position={"absolute"}
              left={"50%"}
              top={"60%"}
              sx={{ transform: "translate(-50%, -50%)" }}
              fontWeight={500}
              fontSize={18}
            >
              {index + 1}
            </Typography>

            <Box display={'flex'} width={{xs: 24, sm: 33}}>
            <SvgGear2
              width={'auto'}
              height={'auto'}
              secondarycolor={"grey"}
              primarycolor={"grey"}
              // style={{ minWidth: 33 }}
              isRtl={isRtl}
            />
            </Box>
          </Box>
          <Typography fontWeight={500} fontSize={{xs: 12, sm: 18}} mb={0.5}>
            {title}
          </Typography>
        </Box>

        <Box
          borderBottom={"3px solid"}
          borderColor={"grey.3"}
          width={"80%"}
        ></Box>
        <Box borderBottom={"3px solid"}></Box>
      </Box>

      <Box display={{xs: 'none', sm: "flex"}}>
        <Typography
          flexGrow={1}
          width={0}
          color={"text.secondary"}
          fontWeight={400}
          fontSize={16}
          textAlign={'justify'}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BenefitCard;
