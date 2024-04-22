'use client';

import React, { useState, useEffect } from "react";
import Axios from "@/components/Axios/Axios";

const DetailInfo = (props) => {

  
  const [ piSeq, setPiSeq ] = useState(props.piSeq);

  const [ detail, setDetail ]         = useState({});
  const [ detailList, setDetailList ] = useState([]);
  
  // 상세 기본정보
  const fetchDetailAxios = async () => {
    const params = {"PI_SEQ": piSeq};
    // 이미지 
    await Axios.post("/api/v1/product/getDetailInfo", params).then((result) => {
      const { detail } = result.data;
      setDetail(detail);    
      console.log("detail : ", detail) ;  
    }).catch((error) => {
      //console.log("error : ", error);
      alert(`알 수 없는 오류가 발생하였습니다.\r\nERROR : ${error.code}`);
      return false;  
    });
  } 


  // 상세 기본정보 리스트
  const fetchDetailListAxios = async () => {
    const params = {"PI_SEQ": piSeq};
    // 이미지 
    await Axios.post("/api/v1/product/getDetailList", params).then((result) => {
      const { detailList } = result.data;
      setDetailList(detailList);
      console.log("detailList : ", detailList) ; 
    }).catch((error) => {
      //console.log("error : ", error);
      alert(`알 수 없는 오류가 발생하였습니다.\r\nERROR : ${error.code}`);
      return false;  
    });
  } 

  useEffect(() => {
    fetchDetailAxios();
    fetchDetailListAxios();
  },[]);

  return (
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

      <div className="md:pl-10 pl-1  mb-6 lg:mb-0">
        {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
        <h1 className="text-gray-900 text-16px title-font font-medium mb-4">{detail.PI_NAME}</h1>            
        {/* <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p> */}
        <div className="flex mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 md:w-48 text-blue-600 font-bold text-12px text-left">판매가</span>
          <span className="text-blue-600 font-bold text-12px text-left">{detail.PI_PRICE}</span>
        </div>
        <div className="flex mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 md:w-48 text-12px text-left">판매자(배너주)</span>
          <span className="text-gray-900 text-12px text-left">{detail.SELLER}</span>
        </div>

        {
          detailList && detailList.map((item, index) => {
            return (
              <div key={index} className="flex mb-2 border-gray-200 py-2">
                <span className="text-gray-500 w-25 md:w-48 text-12px text-left">{item.ITEM_NAME}</span>
                <span className="text-gray-900 text-12px text-left">{item.ITEM_CONTENTS}</span>
              </div>
            );
          })
        }
        


        {/* <div className="flex mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 md:w-48 text-12px text-left">타겟층</span>
          <span className="text-gray-900 text-12px">개인/법인 기업 대표 및 임직원</span>
        </div>
        <div className="flex mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 md:w-48 text-12px text-left">광고영역</span>
          <span className="text-gray-900 text-12px">각 사이트 페이지 및 이메일</span>
        </div>
        <div className="flex mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 md:w-48 text-12px text-left">노출기간</span>
          <span className="text-gray-900 text-12px">30일 (한달)</span>              
        </div> */}

        <div className="flex mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 md:w-48 text-12px text-left">상품 선택</span>
          <span className="text-gray-900 text-12px"></span>              
        </div>

        <div className="flex border-b mb-2 border-gray-200 py-2">
          <span className="text-gray-500 w-25 text-12px text-left">총 상품금액 (수량)</span>
          <span className="ml-auto font-medium text-21px text-gray-900">0원</span>              
        </div>

        <div className="flex">              
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">구매</button>              
        </div>
      </div>

    </div> 
  );
}

export default DetailInfo