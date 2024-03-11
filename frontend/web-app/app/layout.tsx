import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./nav/navbar";
import ToasterProvider from "./provides/ToasterProvider";
import { getCurrentUser } from "./actions/authActions";
import SignalRProvider from "./provides/SignalRProvider";


export const metadata: Metadata = {
  title: "Carsties",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          <SignalRProvider user={user}>
            {children}
          </SignalRProvider>
        </main>
      </body>
    </html>
  );
}
