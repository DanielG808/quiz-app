import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageContentContainer from "@/components/page-content-container";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuizMo",
  description: "Quiz more with QuizMo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex flex-grow justify-center">
          <PageContentContainer>{children}</PageContentContainer>
        </main>
        <Footer />
      </body>
    </html>
  );
}
