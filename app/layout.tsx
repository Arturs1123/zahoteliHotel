'use client'

import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { FooterProps } from "./components/Footer";
import Header from "./components/Header";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Golos_Text({ subsets: ["latin"] });

const FooterData: FooterProps = {
  email: 'email@email.ru',
  phone: '+7 900 900 90-90'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              dotActiveBorderColor: '#3C4EF2',
              colorPrimaryBorderHover: '#3C4EF2',
              trackHoverBg: '#3C4EF2',
              handleColor: '#3C4EF2',
              trackBg: '#3C4EF2',
              colorBgElevated: '#3C4EF2',
              dotSize: 24,
              handleSize: 24,
              handleSizeHover: 24,
              railSize: 8

            }
          }

        }}
      >
        <body className={inter.className}>
          <Header />
          <main className="mx-auto max-w-[1440px] lg:mt-[94px] mt-[48px] bg-[#F9F9F9]">
            {children}
          </main>
          <Footer {...FooterData} />
          <ToastContainer />
        </body>
      </ConfigProvider>
    </html >
  );
}
