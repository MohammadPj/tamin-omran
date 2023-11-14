import React, { FC, useCallback, useEffect, useState } from 'react'

//@Mui
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import {useSearchParams} from "next/navigation";
import SvgSearch from "~/components/icons/final/Search";
import SvgFilter from "~/components/icons/final/Filter";
import CustomMenu from "~/components/custom-mui/custom-menu/CustomMenu";
//------------------------------------------------------------

//@Icons

interface ISearchAndFilterProps {
  handleSearchTable: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >
  filterItems?: { title: string; component: React.ReactNode }[]
}

const SearchAndFilter: FC<ISearchAndFilterProps> = ({
  handleSearchTable,
  filterItems,
}) => {
  //Dependencies
  const theme = useTheme()
  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)
  let searchParams = useSearchParams()

  //Handlers
  const debouncedChangeHandler = handleSearchTable

  const handleCloseFilter = () => {
    setOpenMenu1(false)
    setOpenMenu2(false)
  }

  useEffect(() => {
    handleCloseFilter()
  }, [searchParams])

  return (
    <Box display={'flex'} gap={4} alignItems="center">
      <TextField
        autoComplete="off"
        size={'small'}
        sx={{ width: 250 }}
        placeholder={'جست و جو'}
        onChange={debouncedChangeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgSearch
                width={17}
                height={17}
              />
            </InputAdornment>
          ),
        }}
        variant={'filled'}
      />

      <IconButton sx={{ minWidth: "30px", p: 1, background: "background.2" }}>
        <SvgFilter />
      </IconButton>

      {filterItems && filterItems.length > 0 && (
        <CustomMenu
          menuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          }}
          anchor={
            <IconButton
              sx={{ minWidth: '30px', p: 1, background: 'background.2' }}
              onClick={() => setOpenMenu1(true)}
            >
              <SvgFilter />
            </IconButton>
          }
        >
          <Stack
            minWidth={236}
            py={4.5}
            sx={{
              '& :hover': { borderRadius: 1, backgroundColor: 'background.2' },
            }}
          >
            {filterItems?.map((item, index: number) => (
              <CustomMenu
                open={openMenu2}
                key={index}
                menuProps={{
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                }}
                anchor={
                  <Box
                    onClick={() => setOpenMenu2(true)}
                    width={236}
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    py={2}
                    px={4}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography>{item.title}</Typography>

                    add
                  </Box>
                }
              >
                <Stack
                  minWidth={236}
                >
                  {item.component}
                </Stack>
              </CustomMenu>
            ))}
          </Stack>
        </CustomMenu>
      )}
    </Box>
  )
}

export default SearchAndFilter
