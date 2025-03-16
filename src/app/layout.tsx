import type { Metadata } from "next";
import { Inter, Big_Shoulders_Display, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageContentContainer from "@/components/page-content-container";

// const inter = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const bigShoulders = Big_Shoulders_Display({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const raleway = Raleway({
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
        className={`${raleway.variable} antialiased flex flex-col min-h-screen`}
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
