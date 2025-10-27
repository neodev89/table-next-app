// src/app/page.tsx (Server Component)
import Home from "../../app/home/page";
import { ContentWrapper } from "@/components/wrapper/ContentWrapper";

export default async function AccessUser() {

  return (
    <ContentWrapper>
      <Home />
    </ContentWrapper>
  );
};
