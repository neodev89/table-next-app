import { SxProps, TextField } from "@mui/material";
import { Theme } from "@mui/system";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface ControlledTextFieldProps {
    control: Control<any>;
    name: keyof Record<string, any>;
    rules: RegisterOptions;
    type: "email" | "password" | "text" | "number" | "date";
    label: string;
    fullWidth: boolean;
    defaultValues?: string | undefined;
    placeholder?: string;
    sx?: SxProps<Theme>;
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
                        shrink: type === "date" ? true : undefined
                    }
                }}
            />
        )}
    />
};

export default ControlledTextField;