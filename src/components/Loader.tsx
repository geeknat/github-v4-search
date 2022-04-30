import {Box} from "@mui/material";
import React from "react";

interface LoaderProps {
    label: string
}

export const Loader: React.FC<LoaderProps> = ({label}) => {

    return <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <p>{label}</p>
    </Box>
}
