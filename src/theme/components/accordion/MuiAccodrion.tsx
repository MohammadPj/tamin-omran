import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { Theme } from '@mui/material/styles'
import { AccordionClasses, AccordionProps } from '@mui/material/Accordion'

type TMuiAccordion =
  | {
      defaultProps?: Partial<AccordionProps> | undefined
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof AccordionClasses,
              'MuiAccordion',
              Omit<Theme, 'components'>
            >
          >
        | undefined
      variants?: any[] | undefined
    }
  | undefined

export const MuiAccordion: TMuiAccordion = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      background: 'inherit',
      boxShadow: 'unset',
      border: '1px solid',
      borderColor: theme.palette.grey["2"],
      borderRadius: 4,
      padding: '20px 18px'
    }),
  },
}
