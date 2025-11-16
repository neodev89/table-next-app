import { Paper, styled } from "@mui/material";
import { common } from "@mui/material/colors";

export const Items = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: theme.spacing(0),
    textAlign: 'center',
    color: `${common.white}`,
    ...theme.applyStyles("dark", {
        color: `${common.black}`
    }),
}));