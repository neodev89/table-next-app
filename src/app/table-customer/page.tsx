"server component";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function TableUser() {
    const token = (await cookies()).get("auth_token");
    if (!token) {
        redirect("/")
    }

    return (
        <div>Ciao</div>
    )
};