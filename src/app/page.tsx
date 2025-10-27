import Home from "./home/page";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ContentWrapper } from "@/components/wrapper/ContentWrapper";


export default async function App() {
  const token = (await cookies()).get("token")?.value;

  if (token !== undefined) {
    redirect("/table-customer")
  }

  return (
    <ContentWrapper>
      <Home />
    </ContentWrapper>
  );
}
