'use client'
import React, {FC} from 'react';
import CustomTab, {ITab} from "~/components/custom-mui/custom-tab/CustomTab";
import {TLang} from "~/services/api/type";

interface LanguageTabProps {
  onChange: (data: TLang) => void
  defaultValue?: TLang
}

const LanguageTab: FC<LanguageTabProps> = ({onChange, defaultValue}) => {
  const tabs: ITab[] = [{ label: "فارسی", value: 'fa' }, { label: "انگلیسی", value: 'en' }];

  const handleChange = (value: number) => {
    const lang = tabs[value].value

    onChange(lang as TLang)
  };

  return (
    <CustomTab
      tabs={tabs}
      onChange={handleChange}
      tabsProps={{ sx: { mb: 4 } }}
      defaultValue={tabs.findIndex(t => t.value === defaultValue)}
    />
  );
};

export default LanguageTab;
