import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./style.sass";

import { InputAdornment, SxProps, TextField } from "@mui/material";
import { common } from "@mui/material/colors";
import { Theme } from "@mui/system";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface ControlledTextFieldProps {
    control: Control<any>;
    name: keyof Record<string, any>;
    rules: RegisterOptions;
    type: "email" | "password" | "text" | "number" | "date";
    fullWidth: boolean;
    value?: any;
    label?: string;
    key?: string;
    defaultValues?: string | undefined;
    placeholder?: string;
    sxControlField?: SxProps<Theme>;
    setValue?: (name: keyof Record<(string | number | symbol), any>, value: any) => void;
}

const ControlledTextField = ({
    control,
    name,
    rules,
    type,
    label,
    fullWidth,
}: ControlledTextFieldProps) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    label={label}
                    type={type}
                    fullWidth={fullWidth}
                    helperText={fieldState.error?.message}
                    onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value);
                    }}
                    slotProps={{
                        inputLabel: {
                            shrink: type === "date" ? true : undefined,
                            sx: {
                                top: "8px",
                                fontWeight: 600,
                            },
                        },
                        // input: {
                        //     endAdornment: <CalendarTodayIcon sx={{ color: "black" }} />,
                        // },
                    }}
                    sx={{
                        backgroundColor: "transparent",
                        color: common.black,
                        borderRadius: 3,
                        cursor: "pointer",
                        "& .MuiSvgIcon-root": {
                            color: "black", // ✅ forza il colore dell’icona calendario
                            backgroundColor: common.white,
                        },
                        "& .MuiOutlinedInput-input": {
                            color: common.black,
                            backgroundColor: common.white,
                        }
                    }}
                />
            )}
        />
    );
};

export default ControlledTextField;