'use client';
import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import logo from "@/public/images/ojacgyo.jpg"
import Link from "next/link";

export default function Navbar() {

  const [ menuToggle, setMenuToggle ] = useState(false);

  return (
    <nav className="bg-white ">
      <div className="px-4 mx-auto">        
        <div className="flex mx-auto justify-between">
          <div className="flex space-x-4">

            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700">
                {/* <span className="font-bold">오작교</span> */}
                <Image src={logo} alt="광고를 잇다 - 오작교" width="60" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
            {/* <div className="flex items-center space-x-1"> */}
              <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
                상품안내
              </Link>
              <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
                About us
              </Link>
              <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
                전체보기
              </Link>
              <Link href="/user/product/detail" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
                매체별
              </Link>
              <Link href="/user/product/detail" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
                업종별
              </Link>
              <Link href="/user/product/detail" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
                타겟별
              </Link>
            </div>              
          </div>

          {/* 메뉴2 */}            
          <div className="hidden md:flex  items-center space-x-1">
            <a href="#" className="py-5 px-3 font-size-sm">
              Login
            </a>
            <a
              href="#"
              className="py-2 px-3 font-size-sm bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuToggle(!menuToggle)}
            >

              <svg className="h-6 w-6 text-gray-500"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                strokeWidth="2"  
                strokeLinecap="round"  
                strokeLinejoin="round">  
                <line x1="3" y1="12" x2="21" y2="12" />  
                <line x1="3" y1="6" x2="21" y2="6" />  
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

          </div>
        </div>
        
      </div>
      {/*mobile menu items */}
      <div className={classNames("md:hidden", { hidden: !menuToggle })}>
        <a href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          Pricing
        </a>
        <a href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          Features
        </a>        
        <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          상품안내
        </Link>
        <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          About us
        </Link>
        <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          전체보기
        </Link>
        <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          매체별
        </Link>
        <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          업종별
        </Link>
        <Link href="#" className="block py-2 px-4 font-size-sm hover:bg-gray-200">
          타겟별
        </Link>
        
      </div>
    </nav>
  );

};