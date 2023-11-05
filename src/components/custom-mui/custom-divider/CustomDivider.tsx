'use client'
import React, { FC, SVGProps } from "react";
import { Box, Typography, BoxProps } from "@mui/material";
import SvgGear from "~/components/icons/final/Gear";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";
import {getDictionary} from "~/i18n";
import {store} from "~/store/store";
import CustomLink from "~/components/common/custom-link/CustomLink";

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

  const dictionary = getDictionary();
  const {isRtl} = store.getState().common

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
          style={{ marginBottom: "-4px", marginRight: isRtl ? "-13px" : '0', marginLeft: !isRtl ? "-13px" : '0' }}
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
          <CustomLink href={showMoreHref}>
            <Typography color={"primary"} fontSize={16} fontWeight={700}>
              {dictionary("common.showMore")}
            </Typography>
          </CustomLink>
          <SvgArrowCircleLeft isRtl={isRtl} />
        </Box>
      )}
    </Box>
  );
};

export default CustomDivider;
