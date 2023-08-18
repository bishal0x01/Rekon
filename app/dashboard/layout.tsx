import { Inter } from "next/font/google";

import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Topbar from "../../components/Dashboard/topbar/Topbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="w-full mt-12 px-10">
            <Topbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
