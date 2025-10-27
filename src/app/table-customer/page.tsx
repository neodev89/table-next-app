import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.sass";

const TableUser: React.FC = () => {

    return (
        <Box className={style.containerTable}>
            <Typography variant="h3">Home</Typography>
        </Box>
    )
};

export default TableUser;