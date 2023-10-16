import React, {FC, SVGProps} from "react";
import { Box, Typography, useTheme, BoxProps } from "@mui/material";
import SvgGear from "~/components/icons/Gear";
import SvgArrowCircleLeft from "~/components/icons/ArrowCircleLeft";

interface ISvgProps extends SVGProps<any> {
  primarycolor?: string
  secondarycolor?: string
}

interface Props extends BoxProps{
  title: string;
  onShowMore?: () => void;
  svgProps?: ISvgProps
}

const CustomDivider: FC<Props> = ({ title, onShowMore, svgProps,  ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      borderBottom={"1px solid"}
      borderColor={'grey.2'}
      display={"flex"}
      width={"100%"}
      justifyContent={"space-between"}
      {...rest}
    >
      <Box
        display={"flex"}
        alignItems={"end"}
        borderBottom={"4px solid"}
        borderColor={theme.palette.primary.main}
        pr={4}
      >
        <SvgGear style={{ marginBottom: "-4px", marginRight: "-13px" }} {...svgProps} />
        <Typography fontWeight={500} fontSize={18}>
          {title}
        </Typography>
      </Box>

      {onShowMore && (
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          onClick={onShowMore}
        >
          <Typography color={"primary"} fontSize={16} fontWeight={700}>
            مشاهده همه
          </Typography>
          <SvgArrowCircleLeft />
        </Box>
      )}
    </Box>
  );
};

export default CustomDivider;
