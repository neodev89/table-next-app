import { Box, TextField } from "@mui/material"
import ControlledTextField, { ControlledTextFieldProps } from "../controller-field/controllerFormField"

type ControlledAndVisibleField = ControlledTextFieldProps & {
    visible: boolean;
    fieldLabel: string;
};

const MappingTextField = (props: ControlledAndVisibleField) => {
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            height: "5rem",
            width: "100%",
            alignItems: "center",
            px: 2,
            // border: "1px solid black",
        }}>
            {
                props.visible && (
                    <TextField
                        value={`${props.fieldLabel}`}
                        disabled
                        variant="standard"
                        fullWidth
                        sx={{
                            mr: 1,
                        }}
                        slotProps={{
                            input: {
                                sx: {
                                    fontWeight: 500
                                }
                            }
                        }}
                    />
                )
            }
            <ControlledTextField
                control={props.control}
                name={props.name}
                rules={props.rules}
                type={props.type}
                label={props.label}
                fullWidth={props.fullWidth}
            />
        </Box>
    );
};

export default MappingTextField;