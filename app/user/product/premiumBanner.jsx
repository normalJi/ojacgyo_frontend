'use clien';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "@/components/Axios/Axios";
import Link from "next/link";
import NotFountImage from "@/public/images/notfoundimage.png"


const PremiumBanner = () => {
  const router = useRouter();
  const [ list, setList ] = useState([]);
  // 데이터 조회
  const fetchDataAxios = async () => {
    const params = {"DISPLAY_GB": "PREMIUM"};

    await Axios.post("/api/v1/product/getBannerImg", params).then((result) => {
      const { files } = result.data;
      setList(files);
      console.log("result : ", result);
    }).catch((error) => {
      //console.log("error : ", error);
      alert(`알 수 없는 오류가 발생하였습니다.\r\nERROR : ${error.code}`);
      return false;  
    });
      // const { data } = response;
      // setList(data);    
  } 

  useEffect(() => {
    fetchDataAxios();
  },[]);

  return (
    <section className="p-5">
      <header className="mb-4 border-b border-gray-c8">
        <h1 className="text-2xl font-medium title-font text-gray-900">프리미엄 상품 <span className="text-base">Premium</span></h1>
        {/* <p className="mx-auto leading-relaxed text-base">Premium</p> */}
      </header>

      <div className="grid grid-cols-4 gap-5">
      {list.length > 0 ? list.map( (item, index) => {
          return(
            <div key={index} className="rounded-2xl overflow-hidden">
              <Link href={{pathname: `/user/product/detail`, query: {"seq": item.PI_SEQ}}}>              
                <img src={item.FILE_PATH ? `/storage${item.FILE_PATH}` : NotFountImage}
                  className="w-full object-cover" />
              </Link>
              {/* <div className="p-4 bg-white">
                <header className="mb-2">
                  <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                    [Tailwindcss] css 1줄 없이 예쁜 웹사이트 만들기
                  </h3>
                </header>
                <p className="text-gray-400 text-sm">
                  안녕하세요! 오늘은 새로운 라이브러리를 소개해드릴까합니다!
                </p>
              </div> */}
              
            </div>
          )
      } ) :  <div className="rounded-2xl overflow-hidden col-span-4 items-center mx-auto">등록된 데이터가 없습니다.</div> }
      </div>
    </section>      
  );
};

export default PremiumBanner;