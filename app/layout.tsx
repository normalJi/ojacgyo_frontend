"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {    
  return (    
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}        
      </body>
    </html>
    // <html lang="en">
    //   <body suppressHydrationWarning={true}>
    //     <div className="container max-w-screen-xl flex mx-auto">
    //       <main className="flex min-h-screen flex-col items-center">
    //         <div className="z-10 w-full  items-center">            
    //           <div className="flex mx-auto  border border-gray-c8">
    //             <div className="flex mx-auto">       
    //               <Navbar />
    //             </div>
    //           </div>
    //           <div className="sm:w-full mx-auto">              
    //             <div className="">
    //               {children}
    //             </div>
    //           </div>
    //         </div>          
    //       </main>
    //     </div>
    //   </body>
    // </html>
  );
}
