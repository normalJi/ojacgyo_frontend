'use client';
import React, { useEffect, useState } from "react";
import Axios from "@/components/Axios/Axios";
import Link from "next/link";
import NotFountImage from "@/public/images/notfoundimage.png"

const NewStoreBanner = () => {

  const [ list, setList ] = useState([]);

  // 데이터 조회
  const fetchDataAxios = async () => {
    const params = {"DISPLAY_GB": "NEW"};

    try {
      const response = await Axios.post("/api/v1/product/getBannerImg", params);
      const { files } = result.data;
      setList(files);
    } catch(error) {      
      return false;
    }
  } 

  useEffect(() => {
    fetchDataAxios();
  },[]);

  return (
    <section className="p-5">
      <header className="mb-4 border-b border-gray-c8">
        <h1 className="text-2xl font-medium title-font text-gray-900">신규 입점 상품 <span className="text-base">New Store</span></h1>
        
      </header>

      <div className="grid grid-cols-4 gap-5">        
        {list.length > 0 ? list && list.map( (item, index) => {
            return(
              <div key={index} className="rounded-2xl overflow-hidden">              
                <img src={item.FILE_PATH ? `/storage${item.FILE_PATH}` : NotFountImage}
                  className="w-full object-cover"
                />
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
        } ) : <div className="rounded-2xl overflow-hidden col-span-4 items-center mx-auto">등록된 데이터가 없습니다.</div>  }
        
        
        {/* <div className="rounded-2xl overflow-hidden">              
          <img src="http://picsum.photos/200"
            className="w-full object-cover"
          />
        </div> */}

      </div>
    </section>
  );

}

export default NewStoreBanner;