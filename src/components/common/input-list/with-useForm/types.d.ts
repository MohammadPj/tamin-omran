import { GridProps } from '@mui/material/Grid'
import { SxProps } from '@mui/material'
import React from 'react'
import { Validate, ValidationRule } from 'react-hook-form'
import { TypographyProps } from '@mui/material/Typography'

interface ValidationObject<T> {
  value: T
  message: string
}

interface IHookFormRules {
  valueAsNumber?: boolean,
  required?: boolean | string;
  min?: ValidationObject<number>;
  max?: ValidationObject<number>;
  minLength?: ValidationObject<number>;
  maxLength?: number
  pattern?: ValidationRule<RegExp> | undefined;
  validate?: Validate<any> | Record<string, Validate<any>>;
}

export interface IUseFormInput {
  name: string
  label: React.ReactNode
  type?:
    | 'text'
    | 'select'
    | 'multi-select'
    |'auto-complete'
    | 'email'
    | 'password'
    | 'checkbox'
    | 'date-picker'
    | 'text-area'
    | 'phone'
    | 'number'
    | 'radio'
    | 'currency'
    | 'car-tag'
  options?: { value: string; label: string }[]
  rules?: IHookFormRules
  defaultValue?: any
  placeholder?: string
  gridItemProp?: GridProps
  sx?: SxProps
  disabled?: boolean
  readonly?: boolean
  props?: any
  controlWidth?: boolean
  labelProps?: Partial<TypographyProps<'any', {}>> | undefined
  multiLang?: boolean
}

export interface IWeekDays {
  id: number
  dayName: string
  dayNameEn: string
  isActive: boolean
}
