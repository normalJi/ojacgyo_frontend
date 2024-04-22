'use client';

import React, {useState, useEffect} from "react";
import { useSearchParams } from "next/navigation";
import Axios from "@/components/Axios/Axios";
import DetailInfo from "./detailInfo";
import NotFountImage from "@/public/images/notfoundimage.png"

const ProductDetail = () => {

  const searchParam = useSearchParams();

  const [ piSeq, setPiSeq ] = useState(searchParam.get('seq'));
  const [ image, setImage ]           = useState([]);  

  // 이미지 데이터 조회
  const fetchImgAxios = async () => {
    const params = {"PI_SEQ": piSeq};
    // 이미지 
    await Axios.post("/api/v1/product/getDetailImage", params).then((result) => {
      const { images } = result.data;
      setImage(images);    
      
    }).catch((error) => {
      //console.log("error : ", error);
      alert(`알 수 없는 오류가 발생하였습니다.\r\nERROR : ${error.code}`);
      return false;  
    });
  } 

  useEffect(() => {    
    fetchImgAxios();    
    
  },[]);

  return (

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">        
        {
          image.map((img, index) => {
            return(
              <div key={index} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                {/* <img alt="ecommerce" className="object-cover object-center rounded" src="https://dummyimage.com/720x600" /> */}
                <img src={img.FILE_PATH ? `/storage${img.FILE_PATH}` : NotFountImage}
                  className="w-full object-cover" />
              </div>
            )
          })
        }
        
        
        <DetailInfo piSeq={piSeq} />
         
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="w-full mb-10 md:mb-0">
            <div className="flex mx-auto flex-wrap mb-2 md:mt-2">
              <a className="py-3 w-1/5 justify-center border-b text-12px font-medium inline-flex items-center leading-none tracking-wider">
                관련상품
              </a>
              <a className="py-3 w-1/5 justify-center border-b text-12px font-medium inline-flex items-center leading-none tracking-wider border-indigo-500 text-indigo-500 rounded-t">
                상품상세정보
              </a>
              <a className="py-3 w-1/5 justify-center border-b text-12px font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                취소 및 환불규정
              </a>
              <a className="py-3 w-1/5 justify-center border-b text-12px font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                사용후기
              </a>
              <a className="py-3 w-1/5 justify-center border-b text-12px font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                상품문의
              </a>
                
            </div>

          </div>

        </div>
      </section>
    </section>
  );
}

export default ProductDetail;