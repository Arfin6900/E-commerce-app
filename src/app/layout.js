import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joq Cafe",
  description: "Joq Cafe where you will find full of nutrient items",
 
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
        <link rel="icon" href="/joqcafelogo.webp" sizes="any"/>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        </head>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
