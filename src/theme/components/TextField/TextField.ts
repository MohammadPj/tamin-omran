import { TextFieldProps } from '@mui/material/TextField'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { Theme } from '@mui/material/styles'

type TMuiTextField =
  | {
      defaultProps?: Partial<TextFieldProps> | undefined
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              'root',
              'MuiTextField',
              Omit<Theme, 'components'>
            >
          >
        | undefined
      variants?: [] | undefined
    }
  | undefined

export const MuiTextField: TMuiTextField = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      '& .MuiInputBase-input': {
        '&:-webkit-autofill': {
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: theme.palette.text.primary,
          transition: 'background-color 5000s ease-in-out 0s',
          boxShadow: `0 0 0 1000px ${theme.palette.background['4']} inset !important`,
        },
      },
      '& textarea': {paddingTop: '0 !important', paddingBottom: '0 !important'},
      '& .MuiOutlinedInput-input': {
        backgroundColor: theme.palette.background['4'],
        height: 14,
      },

      '& .MuiFilledInput-root': {
        borderRadius: 10,
        backgroundColor: 'background.2',
        WebkitTextFillColor: 'text.primary',

        '& .MuiInputAdornment-root': {
          marginTop: '0!important',
          height: '100%',
        },
        '&::before': { display: 'none' },
        '&::after': { display: 'none' },
      },
      backgroundColor: 'background.4',
      WebkitTextFillColor: 'text.primary',
      caretColor: theme.palette.text.primary,
    }),
  },
}
