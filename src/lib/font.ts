import { Raleway, Nunito, Roboto, Poppins } from "next/font/google";
export const nunito = Nunito({ subsets: ["latin"] });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const raleway = Raleway({ subsets: ["latin"] });
export const poppins = Poppins({ subsets: ["latin"], weight: "600" });
