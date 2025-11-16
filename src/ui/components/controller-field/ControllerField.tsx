import { SignUpSchemaProps } from "@/zod/signUpSchema";
import { SxProps, TextField, Theme } from "@mui/material";
import { Control, Controller, RegisterOptions } from "react-hook-form"

interface ControllerFieldProps {
    control: Control<any>;
    name: keyof SignUpSchemaProps;
    setValue: (name: keyof SignUpSchemaProps, value: string | number) => void;
    defaultValues?: string | undefined;
    rules: RegisterOptions;
    type: "email" | "password" | "text" | "number" | "date";
    label: string;
    fullWidth: boolean;
    placeholder?: string;
    sx?: SxProps<Theme>;
}

export const ControllerField = ({
    control,
    name,
    setValue,
    rules,
    type,
    label,
    fullWidth,
    placeholder,
    sx,
}: ControllerFieldProps) => {

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
                    value={field.value ?? ""}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value);
                        setValue(name, value)
                    }}
                    sx={sx}
                    placeholder={placeholder}
                    slotProps={{
                        inputLabel: {
                            shrink: type === "date" ? true : undefined
                        }
                    }}
                />
            )}
        />
    );
};