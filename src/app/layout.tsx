"use client";

import React, { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./dashboard/components/Sidebar";
import Header from "./dashboard/components/Header";
import { useRouter } from "next/navigation";
import { FaHome, FaUser, FaCogs, FaEnvelope } from "react-icons/fa"; // Icons for the sidebar
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ToastContainer />
          <LayoutWithAuth>{children}</LayoutWithAuth>
        </Providers>
      </body>
    </html>
  );
}

function LayoutWithAuth({ children }: { children: React.ReactNode }) {
  const links = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Posts", href: "/post", icon: <FaCogs /> },
    { label: "Services", href: "/services", icon: <FaEnvelope /> },
    { label: "Contact", href: "/contact", icon: <FaUser /> },
  ];

  const router = useRouter();

  const { isAuth } = useSelector((state: RootState) => state.login);

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth, router]);

  return (
    <div className="flex h-screen">
      {isAuth && <Sidebar links={links} />}

      <div className="flex-1 flex flex-col">
        {isAuth && <Header />}

        {children}
      </div>
    </div>
  );
}
