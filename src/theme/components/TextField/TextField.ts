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
      '& input': {
        padding: ownerState.size === 'small' ? '7px 6px' : '10px 6px',
        fontSize: ownerState.size === 'small' ? 12 : 14
      },
      '& .MuiInputBase-input': {
        '&:-webkit-autofill': {
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'unset',
        },
      },
      '& textarea': {paddingTop: '0 !important', paddingBottom: '0 !important'},
      '& .MuiOutlinedInput-input': {
        backgroundColor: theme.palette.grey["100"],
        height: 14,
      },

      '& .MuiFilledInput-root': {
        borderRadius: 2,
        backgroundColor: theme.palette.grey["1"],
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
