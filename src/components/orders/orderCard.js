"use client"

import { demoimg } from "@/constants/images";

const OrderCard = () => {
    return (
      <span className="flex w-[90%] lg:flex-row flex-col justify-between items-center border-b-2 lg:pb-5 p-4 m-3 lg:gap-0 gap-4">
        <div className="flex lg:flex-row flex-col gap-5 items-center">
          <img src={demoimg} className="lg:w-[7vw] w-[40vw]" />
          <div className="flex flex-col items-start gap-1">
            <p className="text-large font-bold">Joq special coffee</p>
            <p className="text-large">
              <b>color:</b>brown
            </p>
          </div>
        </div>
  
        <div className="flex lg:gap-40 gap-20">
          <p className="lg:text-xl text-large">
            <b>Qty:</b>1
          </p>
          <p className="lg:text-xl text-large text-[#2C67F9]">
            <b>$</b>100
          </p>
        </div>
      </span>
    );
  };
  export default OrderCard