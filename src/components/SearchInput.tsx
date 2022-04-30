import React from 'react'
import {Box, IconButton, InputAdornment, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export const SearchInput = ({...rest}) => {

    return (
        <Box px={2} py={1} mx={4} my={2} bgcolor={'gray'} borderRadius={4} width={'100%'}>
            <InputBase
                fullWidth
                placeholder={'Search users on GitHub...'}
                type={'text'}
                sx={{color: 'white'}}
                inputProps={{ "data-testid": "search-input" }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                            <SearchIcon sx={{color: 'white'}}/>
                        </IconButton>
                    </InputAdornment>
                }
                {...rest}
            />
        </Box>
    )
}
