"use client"

import { demoimg } from "@/constants/images";
import { useState } from "react";

const OrderCard = ({val}) => {
  const [showFull, setShowfull] = useState(false);
  const description=(des)=>{
    if(showFull){
      return des
    }else{
      return `${des?.slice(0,90)} ...`
    }
  }
    return (
      <span className="flex w-[90%] lg:flex-row flex-col justify-between items-center border-b-2 lg:pb-5 p-4 m-3 lg:gap-0 gap-4">
        <div className="flex lg:flex-row flex-col gap-5 items-center">
          <img src={val?.image} className="lg:w-[7vw] w-[70px] w-[40vw]" />
          <div className="flex flex-col items-start gap-1">
            <p className="text-large font-bold">{val?.name}</p>
            <p className="lg:text-sm text-xs">
              <b>description:</b> {description(val?.description)}<b onClick={()=>{setShowfull(!showFull)}} className="text-blue-500">{showFull?"show less":"Show full"}</b>
            </p>
          </div>
        </div>
  
        <div className="flex lg:gap-40 gap-20">
          <p className="lg:text-xl text-large">
            Qty:{val?.count}
          </p>
          <p className="lg:text-xl text-large text-[#2C67F9]">
            ${val?.price}
          </p>
        </div>
      </span>
    );
  };
  export default OrderCard