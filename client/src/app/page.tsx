"use client";

import Image from "next/image";
import AnimatedPinDemo from '@/app/components/Cards';
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import Headder from '@/app/components/Headder'
import Navbar from '@/app/components/Navbar'
export default function Home() {
  return (
    // <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
    //   <div className="py-20">

    //     <div className="flex justify-center mb-20">
    //       <ConnectButton
    //         client={client}
    //         appMetadata={{
    //           name: "Example App",
    //           url: "https://example.com",
    //         }}
    //       />
    //     </div>

        
    //   </div>
    // </main>
    <div>

    
        <div className="flex " >
            <Navbar/>
          </div>
        <div className="flex gap-2 p-2 md:p-10">
          {/* {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          ))} */}
          
          
          <Headder/>
        </div>
        <AnimatedPinDemo></AnimatedPinDemo>
        </div>
  );
}



