import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <h1>Whatsapp</h1>
        </header>
        {children}
        <footer> sos un cabeza</footer>
      </body>
    </html>
  );
}