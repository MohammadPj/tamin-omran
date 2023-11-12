import React, {FC} from 'react'
import Box from '@mui/material/Box'
import { SwipeableDrawer } from '@mui/material'

interface Props {
  isOpen?: boolean
  onClose?: () => void
  children: React.ReactNode
}

const BottomSheet: FC<Props> = ({ isOpen = false, onClose = () => {}, children }) => {

  const handleOpen = () => {
    console.log('open')
  }

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={isOpen}
      onClose={onClose}
      keepMounted={true}
      onOpen={handleOpen}
      disableSwipeToOpen={true}
      sx={{
        "& .MuiPaper-root": {
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        }
      }}
    >
      <Box width={'100%'} dir={'rtl'} height={'100%'}>
        <Box display={'flex'} justifyContent={'center'} py={2}>
          <Box width={50} height={8} borderRadius={2} bgcolor={'gray.25'} />
        </Box>
        {children}
      </Box>
    </SwipeableDrawer>
  )
}

export default BottomSheet
