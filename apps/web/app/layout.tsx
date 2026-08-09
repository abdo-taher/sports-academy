import type { Metadata } from "next";
import type { ReactNode } from "react";
import { QueryProvider } from "../providers/query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sports Academy Platform",
  description: "Sports Academy Platform application foundation"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
