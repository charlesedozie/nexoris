import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/Poppins-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/Poppins-SemiBold.woff2", weight: "600" },
    { path: "../../public/fonts/Poppins-Bold.woff2", weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
