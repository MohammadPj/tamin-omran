import React, { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { GridProps } from '@mui/material/Grid'
import { BoxProps } from '@mui/material/Box'
import { TypographyProps } from '@mui/material/Typography'
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
import InputError from "~/components/common/input-list/InputError";
import UseFormInput from "~/components/common/input-list/with-useForm/UseFormInput";
import {get} from "~/utils/methods";
import {UseFormReturn} from "react-hook-form";

interface Props {
  inputList: IUseFormInput[]
  form: UseFormReturn<any>
  gridContainerProps?: GridProps
  gridItemProps?: GridProps
  itemProps?: any
  labelsProps?: Partial<TypographyProps<'label', {}>> | undefined
  errorProps?: BoxProps
}

const InputListWithUseForm: FC<Props> = ({
  inputList,
  form,
  gridItemProps,
  gridContainerProps,
  labelsProps,
  errorProps,
  itemProps,
}) => {
  return (
    <Grid
      container
      columnSpacing={10}
      rowSpacing={0}
      rowGap={6}
      alignItems={'center'}
      {...gridContainerProps}
    >
      {inputList?.map(inputProp => (
        <Grid
          key={inputProp.name}
          item
          xs={4}
          position={'relative'}
          {...gridItemProps}
          {...inputProp.gridItemProp}
        >
          {inputProp.type !== 'checkbox' && (
            <Box display={'flex'}>
              <Typography
                flexGrow={1}
                width={0}
                component={'label'}
                display={'inline-block'}
                fontWeight={400}
                fontSize={14}
                mb={2}
                htmlFor={inputProp.name}
                noWrap
                title={inputProp?.label?.toString() || ''}
                color={'n.3'}
                {...labelsProps}
                {...inputProp.labelProps}
              >
                {inputProp.rules?.required && (
                  <Typography
                    component={'span'}
                    color={'error'}
                    fontSize={16}
                    fontWeight={700}
                  >
                    *
                  </Typography>
                )}{' '}
                {inputProp.label}
              </Typography>
            </Box>
          )}

          <UseFormInput
            form={form}
            error={get(form?.formState?.errors, `${inputProp.name}`)}
            itemProps={itemProps}
            {...inputProp}
          />

          <InputError
            cy-data={`error-${inputProp.name}`}
            boxProps={{
              position: 'absolute',
              bottom: -25,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              ...errorProps,
            }}
            error={
              (form?.formState?.errors?.[inputProp.name]?.message as string) ||
              (get(
                form?.formState?.errors,
                `${inputProp.name}.message`
              ) as string)
            }
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default InputListWithUseForm
