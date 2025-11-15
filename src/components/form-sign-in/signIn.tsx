import { singInFreelance } from "@/global-state/freelanceSignIn";
import { signInSchema, SignInSchemaProps, SignUpSchemaProps } from "@/zod/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ControllerField } from "../controller-field/ControllerField";
import { common } from "@mui/material/colors";
import { useRouter } from "next/navigation";

export default function SignIn() {

    const dispatch = useDispatch();
    const router = useRouter();

    const updateValues = (name: keyof SignUpSchemaProps, value: string | number) => {
        dispatch(singInFreelance({ [name]: value } as SignInSchemaProps));
    };

    const { control, handleSubmit } = useForm<SignInSchemaProps>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            emailUser: "",
            passwordUser: "",
        }
    });

    const handleSubmitReg = async (data: SignInSchemaProps) => {
        dispatch(singInFreelance(data))
        const res = await fetch("/api/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const datas = await res.json();
        console.log("I dati da ritornare sono: ", res);
        if (res.ok) router.replace(datas.redirectTo);
        return res;
    };

    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit(handleSubmitReg)}
            sx={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                p: 2,
            }}
        >
            <Stack spacing={2}
                sx={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 2,
                }}>
                <ControllerField
                    control={control}
                    name="emailUser"
                    label="Name"
                    setValue={updateValues}
                    rules={{ required: "Email obbligatoria" }}
                    sx={{
                        backgroundColor: common.white,
                        borderRadius: 2,
                    }}
                    fullWidth={true}
                    type={"text"}
                />
                <ControllerField
                    control={control}
                    name="passwordUser"
                    label="Password"
                    setValue={updateValues}
                    rules={{ required: "Password obbligatoria" }}
                    sx={{
                        backgroundColor: common.white,
                        borderRadius: 2,
                    }}
                    fullWidth={true}
                    type={"password"}
                />
                <Button
                    type="submit"
                    color={"success"}
                    variant={"contained"}
                >
                    Registry
                </Button>
            </Stack>
        </Box>
    );
};