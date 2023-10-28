import React, { FC } from "react";
import { Box } from "@mui/material";
import BenefitCard from "~/app/[lang]/(main)/_components/benefits/BenefitCard";

const Benefits: FC = () => {
  const benefits = [
    {
      title: "برخورداری از امکانات و انبار های وسیع",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد ",
    },
    {
      title: "بیش از 30 سال سابقه مفید",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته",
    },
    {
      title: "عضویت رسمی در انجمن ها",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات",
    },
    {
      title: "اطمینان از تضمین کیفیت اجناس ",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات ",
    },
  ];
  return (
    <Box display={'flex'} gap={5}>
      {benefits.map((benefit, i) => (
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
