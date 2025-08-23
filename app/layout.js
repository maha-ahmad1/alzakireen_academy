import { Geist, Geist_Mono } from "next/font/google";

// Styles Importing
import "rc-slider/assets/index.css";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import "photoswipe/style.css";
import "@/styles/app.scss";
import 'lazysizes';
// Components Importing
import Footer from "@/components/Footer/Footer";
import ClientWrapper from "@/components/Client/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alzakireen Academy",
  description: "Al Zakireen online Quran learning academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
