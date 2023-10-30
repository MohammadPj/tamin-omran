import React, { FC } from "react";
import { Box } from "@mui/material";
import BenefitCard from "~/app/[lang]/(main)/_components/benefits/BenefitCard";
import {getDictionary} from "~/i18n";

const Benefits: FC = () => {

  const dictionary = getDictionary();
  const benefits = dictionary("home.InformationSection1.benefits")

  return (
    <Box display={'flex'} gap={5}>
      {benefits?.map((benefit: any, i: number) => (
        <BenefitCard
          key={i}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </Box>
  );
};

export default Benefits;
