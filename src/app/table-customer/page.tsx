"server component";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import WrapperComponent from "@/ui/components/wrapper/WrapperComponent";
import AddDataTable from "./AddDataTable";
import { WrapperTableData } from "./wrapper";

export default async function TableUser() {
    const token = (await cookies()).get("auth_token");
    if (!token) {
        redirect("/")
    }

    return (
        <div>
            <WrapperTableData />
        </div>
    )
};