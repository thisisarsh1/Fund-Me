"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import { Grid2X2 } from 'lucide-react';
import { Send } from 'lucide-react';
import { Bitcoin } from 'lucide-react';
import { ReceiptIndianRupee } from 'lucide-react';
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
const links = [
  {
    label: "Home",
    href: "/",
    icon: (
      <Grid2X2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
     
    ),
  },
  {
    label: "Create Campaign",
    href: "/CreateCampaign",
    icon: (
      <Send className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
     
    ),
  },
  {
    label: "Payments",
    href: "/Payments",
    icon: (
      
      <Bitcoin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>
    ),
  },
  {
    label: "Withdraw",
    href: "/Withdraw",
    icon: (
      <ReceiptIndianRupee className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>
     
    ),
  },
  {
    label: "Profile",
    href: "/Profile",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

// export const metadata: Metadata = {
//   title: "thirdweb SDK + Next starter",
//   description:
//     "Starter template for using thirdweb SDK with Next.js App router",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" overflow-x-hidden">
        <ThirdwebProvider>


        <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 max-w-8xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            {/* <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar" />
                ),
              }} /> */}
          </div>
        </SidebarBody>
      </Sidebar>
      
      <div className="flex flex-1 overflow-y-auto">
    <div
      className="p-1 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {children}
        </div>
        </div>
  
    

    </div>



        
          
          </ThirdwebProvider>
          </main>
      </body>
    </html>
  );
}
export const Logo = () => {
  return (
    (<Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div
        className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre">
        Fund-Me
      </motion.span>
    </Link>)
  );
};

export const LogoIcon = () => {
  return (
    (<Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div
        className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>)
  );
};

// Dummy dashboard component with content
