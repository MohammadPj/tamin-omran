import React, { FC, useState } from 'react'

//@Mui
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CustomMenuList from "~/components/custom-mui/custom-menu/CustomMenuList";

export interface ITableAction {
  label: string | React.ReactNode
  icon?: React.ReactElement
  onClick?: () => void
  disabled?: boolean
}

interface Props {
  actions: ITableAction[]
}

const TableActionMenu: FC<Props> = ({ actions }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const changeIconColor = (open: boolean) => {
    setOpen(open)
  }

  return (
    <CustomMenuList
      onToggle={changeIconColor}
      anchor={
        <Box display={'flex'} sx={{ cursor: 'pointer' }}>
          ...
        </Box>
      }
      menuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        PaperProps: {
          sx: {
            mt: 1,
            width: 220,
            border: '1px solid',
            borderColor: theme.palette.primary['100'],
          },
        },
      }}
      menuItemProps={{ sx: { p: 4, '& li': { width: '100%' } } }}
      items={actions.map(action => ({
        content: (
          <Box width="100%" display={'flex'} alignItems={'center'}>
            {action.icon &&
              React.cloneElement(action.icon, {
                width: 22,
                height: 22,
                style: { marginLeft: 10 },
              })}
            <Typography
              display="flex"
              width="100%"
              fontWeight={300}
              fontSize={12}
            >
              {action.label}
            </Typography>
          </Box>
        ),
        onClick: action.onClick,
        menuItemProp: { disabled: action.disabled },
      }))}
    />
  )
}

export default TableActionMenu