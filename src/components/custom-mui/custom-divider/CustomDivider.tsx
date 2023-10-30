import React, { FC, SVGProps } from "react";
import { Box, Typography, BoxProps } from "@mui/material";
import SvgGear from "~/components/icons/final/Gear";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";
import Link from "next/link";
import {getDictionary} from "~/i18n";
import {useCommon} from "~/store/common/commonSlice";

interface ISvgProps extends SVGProps<any> {
  primarycolor?: string;
  secondarycolor?: string;
}

interface Props extends BoxProps {
  title: string;
  showMoreHref?: string;
  svgProps?: ISvgProps;
}

const CustomDivider: FC<Props> = ({ title, showMoreHref, svgProps, ...rest }) => {

  const translate = getDictionary();
  const {isRtl} = useCommon()

  return (
    <Box
      borderBottom={"1px solid"}
      borderColor={"grey.2"}
      display={"flex"}
      width={"100%"}
      justifyContent={"space-between"}
      {...rest}
    >
      <Box
        display={"flex"}
        alignItems={"end"}
        borderBottom={"4px solid"}
        borderColor={'primary'}
        pr={4}

      >
        <SvgGear
          isRtl={isRtl}
          style={{ marginBottom: "-4px", marginRight: isRtl ? "-13px" : '0' }}
          {...svgProps}
        />
        <Typography fontWeight={500} fontSize={18}>
          {title}
        </Typography>
      </Box>

      {showMoreHref && (
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
        >
          <Link href={showMoreHref as any}>
            <Typography color={"primary"} fontSize={16} fontWeight={700}>
              {translate("common.showMore")}
            </Typography>
          </Link>
          <SvgArrowCircleLeft isRtl={isRtl} />
        </Box>
      )}
    </Box>
  );
};

export default CustomDivider;
