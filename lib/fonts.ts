import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Poppins,
  Ubuntu,
} from "next/font/google"

// import { JetBrains_Mono as FontMono, Inter as FontSans, Poppins } from "next/font/google"

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
})
