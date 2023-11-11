import React, {FC} from 'react';
import {Calendar} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useSearchParams} from "react-router-dom";

interface ICalendarFilterProps {
  values:any;
  date?:any;
  setDate:any;
  removeDateFilter:()=>any;
  handleFilter:()=>any;
}
const CalendarFilter:FC<ICalendarFilterProps> = ({values,date,setDate,removeDateFilter,handleFilter}) => {
  //Dependancies
  const weekDays = ['شنبه', '1شنبه', '2شنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه']

  let [searchParams, setSearchParams] = useSearchParams()

  return (
    <Calendar
      value={values}
      weekDays={weekDays}
      className={'custom-calendar'}
      calendar={persian}
      locale={persian_fa}
      range
      rangeHover
      onChange={(value: any) =>
        setDate({ from: value[0], to: value[1] ?? new Date() })
      }
    >
      <Box
        pb={2}
        display={'flex'}
        flexDirection={'row'}
        pr={2}
        gap={2}
      >
        <Button
          id="confirm-filter"
          sx={{ minWidth: 64, borderRadius: 1, fontSize: 10 }}
          onClick={handleFilter}
        >
          اعمال
        </Button>

        {searchParams.has('from' || searchParams.has('to')) && (
          <Button
            sx={{ minWidth: 64, borderRadius: 1, fontSize: 10 }}
            onClick={removeDateFilter}
          >
            حذف فیلتر
          </Button>
        )}
      </Box>
    </Calendar>
  );
};

export default CalendarFilter;