import Home from "./home/page";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ContentWrapper } from "@/components/wrapper/ContentWrapper";
import { CtxProvider } from "@/components/contextBackground/ctx";


export default async function App() {
  const token = (await cookies()).get("token")?.value;

  if (token !== undefined) {
    redirect("/table-customer")
  }

  return (
    <ContentWrapper>
      <CtxProvider>
        <Home />
      </CtxProvider>
    </ContentWrapper>
  );
}
