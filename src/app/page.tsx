import { ContentWrapper } from "@/wrapper/ContentWrapper";
import Link from "next/link";

export default function App() {
  return (
    <ContentWrapper>
      <>
        <div>Pagina principale</div><br />
        <Link href={"/home"}>Home</Link>
      </>
    </ContentWrapper>
  );
}
