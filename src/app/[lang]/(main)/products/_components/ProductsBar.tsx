"use client";
import React, { FC, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import SvgSort from "~/components/icons/final/Sort";
import { getDictionary } from "~/i18n";
import TextField from "@mui/material/TextField";
import SvgSearch from "~/components/icons/final/Search";
import SvgFilter from "~/components/icons/final/Filter";
import BottomSheet from "~/components/custom-mui/bottom-sheet/BottomSheet";
import ProductsFilter from "~/app/[lang]/(main)/products/_components/products-filter/ProductsFilter";
import SvgClose from "~/components/icons/final/Close";

const ProductsBar: FC = () => {
  const dictionary = getDictionary();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box
      bgcolor={"background.1"}
      p={2}
      borderRadius={1}
      borderBottom={"1px solid"}
      borderColor={"grey.2"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={3}
    >
      <Box display={{xs: "flex", sm: "none"}}>
        <SvgFilter width={24} onClick={() => setIsBottomSheetOpen(true)} />
      </Box>

      <Box flexGrow={1} display={{ xs: "block", sm: "none" }}>
        <TextField
          fullWidth
          size={"small"}
          variant={"filled"}
          placeholder={"محصول مورد نظر را جستجو کنید"}
          InputProps={{
            startAdornment: (
              <SvgSearch width={24} height={24} primarycolor={"#6E6E6E"} />
            ),
          }}
        />
      </Box>

      <Box display={"flex"} justifySelf={"end"}>
        <Typography display={{ xs: "none", sm: "block" }}>
          {dictionary("products.products")}
        </Typography>
      </Box>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      >
        <Box minHeight={"50vh"}>
          <Box display={"flex"} justifyContent={"end"} px={2}>
            <SvgClose
              primarycolor={theme.palette.secondary.main}
              onClick={() => setIsBottomSheetOpen(false)}
            />
          </Box>
          <ProductsFilter />
        </Box>
      </BottomSheet>
    </Box>
  );
};

export default ProductsBar;
