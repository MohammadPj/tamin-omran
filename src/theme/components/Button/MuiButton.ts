import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { Theme } from '@mui/material/styles'
import { ButtonProps, ButtonClasses } from '@mui/material'

type TMuiButton =
  | {
      defaultProps?: Partial<ButtonProps<'button'>> | undefined
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof ButtonClasses,
              'MuiButton',
              Omit<Theme, 'components'>
            >
          >
        | undefined
      variants?: [] | undefined
    }
  | undefined

export const MuiButton: TMuiButton = {
  defaultProps: {
    disableElevation: true,
    variant: 'contained',
    size: 'medium',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius: 2,
      minWidth: 'unset',
      fontSize:
        ownerState.size === 'small'
          ? 14
          : ownerState.size === 'medium'
          ? 16
          : 18,
      padding:
        ownerState.size === 'medium'
          ? '8px 24px'
          : ownerState.size === 'large'
          ? '10px 32px'
          : '4px 24px',
    }),
  },
}
