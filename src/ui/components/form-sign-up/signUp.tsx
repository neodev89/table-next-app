"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaProps } from "@/zod/signUpSchema";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Items } from "../items-grid/Items";
import { ControllerField } from "../controller-field/ControllerField";
import { common } from "@mui/material/colors";
import { signUpNewFreelance } from "@/global-state/freelanceRegistrySlice";

export default function SignUp() {
    const dispatch = useDispatch();

    const updateValues = (name: keyof SignUpSchemaProps, value: string | number) => {
        dispatch(signUpNewFreelance({ [name]: value } as SignUpSchemaProps));
    };

    const { control, handleSubmit } = useForm<SignUpSchemaProps>({
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
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name="nameUser"
                            label="Name"
                            setValue={updateValues}
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
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name="lastNameUser"
                            label="Last Name"
                            setValue={updateValues}
                            rules={{ required: "lastName required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                            type={"text"}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"taxID"}
                            label={"Tax ID"}
                            setValue={updateValues}
                            rules={{ required: "Tax ID required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                            type={"text"}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"vatNumber"}
                            label={"Vat Number"}
                            setValue={updateValues}
                            rules={{ required: "Vat Number required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                            type={"text"}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"birthUser"}
                            label={"Birth"}
                            setValue={updateValues}
                            rules={{ required: "Birth required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                            type={"date"}
                            placeholder=""
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"birthCityUser"}
                            label={"Birth City"}
                            setValue={updateValues}
                            rules={{ required: "Birth City required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                            type={"text"}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"countryUser"}
                            label={"Country User"}
                            setValue={updateValues}
                            rules={{ required: "Country User required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                            type={"text"}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"emailUser"}
                            label={"Email"}
                            type={"email"}
                            setValue={updateValues}
                            rules={{ required: "email required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <ControllerField
                            control={control}
                            name={"passwordUser"}
                            label={"Password"}
                            type={"password"}
                            setValue={updateValues}
                            rules={{ required: "password required" }}
                            sx={{
                                backgroundColor: common.white,
                                borderRadius: 2,
                            }}
                            fullWidth={true}
                        />
                    </Items>
                </Grid>
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