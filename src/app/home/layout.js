import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <footer> sos un cabeza</footer>
      </body>
    </html>
  );
}
