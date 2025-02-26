import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Fotomenu from "@/components/Fotomenu";
import Link from "next/link";
import Settings from "@/components/Setting";
import Order from "@/components/Order";
import Pilihmenu from "@/components/Pilihmenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-black'}>
         <div className="container-fotomenu">
          <Fotomenu />
          </div> 
          <div className="container-sidebar">
            <Sidebar />
          </div>
          <div className="container-settings">
            <Settings />
          </div>
          <div className="container-order">
            <Order />
          </div>
          <div>
            <Pilihmenu />
          </div>
          {children}
        </body>
    </html>
  );
}
