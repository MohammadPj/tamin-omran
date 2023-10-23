import React  from "react";
import "~/styles/fonts.css";
import "~/styles/globals.css";
import RootLayoutClient from "~/app/[lang]/[country]/_components/RootLayoutClient";

export const metadata = {
  title: "تامین عمران قطعه",
  description: "تامین عمران قطعه",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body style={{overflowX: 'hidden'}} suppressHydrationWarning={true}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}