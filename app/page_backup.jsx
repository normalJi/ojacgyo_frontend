'use client';
import Image from "next/image";
import MainBanner from "./user/product/mainBanner";
import PremiumBanner from "./user/product/premiumBanner";
import NewStoreBanner from "./user/product/newStoreBanner";
import NotFountImage from "@/public/images/notfoundimage.png"

export default function Home() {
  return (    
    <>
      <section className="text-gray-600 mx-auto body-font overflow-hidden">
        <div className="container flex px-5 py-5 mx-auto">      
          <div className="flex max-w-screen-xl mx-auto">        
            <div className="w-2/3 mr-3 flex flex-col mb-0 text-center">
              <div className="rounded-lg overflow-hidden pb-5">              
                <MainBanner />
              </div>          
            </div>
            <div className="flex mb-10 w-1/3">
              <Image 
                alt="content" 
                className="object-cover object-center  rounded-lg border border-gray-c8 w-[320px] h-[301px]" 
                src={NotFountImage}              
              />          
            </div>

          </div>
        </div>
      </section>

      <div>
        <PremiumBanner />
      </div>

      <div>
        <NewStoreBanner />
      </div>
    </>
  );
}
