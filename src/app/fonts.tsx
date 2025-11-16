import { Dosis, Inter, Montserrat } from "next/font/google";

const dosis = Dosis({
    variable: "--font-dosis",
    subsets: ["latin"],
    weight: "variable",
    style: ["normal"],
});

const interNum = Inter({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "variable",
  style: ["italic", "normal"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "variable",
  style: ["italic", "normal"],
});

export {
    dosis,
    interNum,
    montserrat,
}