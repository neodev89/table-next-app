import Home from "./home/page";

import { ContentWrapper } from "@/ui/components/wrapper/ContentWrapper";
import { CtxProvider } from "@/ui/components/contextBackground/ctx";


export default async function App() {

  return (
    <ContentWrapper>
      <CtxProvider>
        <Home />
      </CtxProvider>
    </ContentWrapper>
  );
}
