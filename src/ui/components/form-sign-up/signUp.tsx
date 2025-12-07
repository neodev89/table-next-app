"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaProps } from "@/zod/signUpSchema";
import { Box, Button, Grid } from "@mui/material";
import { Control, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Items } from "../items-grid/Items";
import { ControllerField } from "../controller-field/ControllerField";
import { common } from "@mui/material/colors";
import { signUpNewFreelance } from "@/global-state/freelanceRegistrySlice";
import { useEffect, useState } from "react";
import setTypeField from "@/utils/setTypeFields";
import setLogicLabel from "@/utils/setLogicLabel";

export interface mappedProps {
    control: Control<SignUpSchemaProps>;
    name: keyof SignUpSchemaProps;
    label: string;
    type: "email" | "password" | "date" | "number" | "text";
    setValues: (name: keyof SignUpSchemaProps, value: string | number) => void;
}

export default function SignUp() {
    const [mappedState, setMappedState] = useState<mappedProps[] | []>([]);
    const dispatch = useDispatch();

    const updateValues = (name: keyof SignUpSchemaProps, value: string | number) => {
        dispatch(signUpNewFreelance({ [name]: value } as SignUpSchemaProps));
    };

    const { control, handleSubmit, getValues } = useForm<SignUpSchemaProps>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            nameUser: "",
            lastNameUser: "",
            taxID: "",
            vatNumber: "",
            birthUser: "",
            birthCityUser: "",
            countryUser: "",
            emailUser: "",
            passwordUser: "",
        }
    });

    useEffect(() => {
        const processField = async () => {
            const mappedState = await Promise.all(Object.keys(getValues()).map(async (K) => {
                const filteredType = await setTypeField(K)
                const newObj = {
                    control: control,
                    name: K as keyof SignUpSchemaProps,
                    label: K.replace(/User$/, ""),
                    type: filteredType,
                    setValues: updateValues,
                };
                return newObj;
            }));
            setMappedState(mappedState as mappedProps[]);
        };
        processField();
    }, []);


    const handleSubmitReg = async (data: SignUpSchemaProps) => {
        dispatch(signUpNewFreelance(data));
        const req = await fetch("/api/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res: SignUpSchemaProps = await req.json();
        console.log("I dati da ritornare sono: ", res);

        return res;
    };

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(handleSubmitReg)}
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                minHeight: '100%',
                minWidth: '100%',
                backgroundColor: 'transparent',
            }}>
            <Grid container columns={9} gap={2} sx={{
                minHeight: '100%',
                width: '90%',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.52)',
                borderRadius: 2,
                py: 1,
            }}>
                {mappedState?.map((item, idx) => {
                    console.log("I dati sono: ", item);
                    return (
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Items>
                                <ControllerField
                                    key={idx}
                                    control={item.control}
                                    name={`${item.name}`}
                                    label={setLogicLabel(item.label)}
                                    setValue={item.setValues}
                                    rules={{ required: "name obbligatorio" }}
                                    sx={{
                                        backgroundColor: common.white,
                                        borderRadius: 2,
                                    }}
                                    fullWidth={true}
                                    type={"text"}
                                />
                            </Items>
                        </Grid>
                    )
                })
                }
                <Grid size={{ xs: 12, md: 4 }}>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",

                    }}>
                        <Button
                            type="submit"
                            color={"success"}
                            variant={"contained"}
                        >
                            Registry
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};