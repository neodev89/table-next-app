import { cookies } from "next/headers";

export default async function getCookies() {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    let result: boolean = false;
    if (!token || token === "") {
        return result = false;
    } else {
        return result = true;
    }
}