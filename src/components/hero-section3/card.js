"use client"
import { useState } from "react";
import CounterComponent from "./counter-component";

const Card = ({ val, addToCart, increment, decrement }) => {
  const [showFull, setShowfull] = useState(false);
  const description=(des)=>{
    if(showFull){
      return des
    }else{
      return `${des?.slice(0,90)} ...`
    }
  }
    return (
      <section class="shadow rounded-3xl h-[max-content] lg:w-[390px] w-[90%] transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
        <div class="lg:order-first">
          <div class="flex flex-col">
            <div class="lg:p-8 p-4 rounded-3xl ring-1 ring-white/10 shadow-sm">
              <div class="flex justify-between">
                <div class="flex items-center gap-3 lg:flex-col flex-row w-full">
                  <img src={val.image} className="lg:w-40 w-[100px]" />
                  <div className="flex flex-col">
                      <p class="text-neutral-800 lg:text-lg font-semibold">{val.name}</p>
                      <p class="mt-1 text-xs text-sm text-gray-700 text-justify lg:hidden block">
                         {description(val?.description)}<b onClick={()=>{setShowfull(!showFull)}} className="text-blue-500">{showFull?"show less":"Show full"}</b>
                     </p>
                  </div>
                </div>
              </div>
  
             <p class="cursor-pointer mt-1 text-xs lg:text-sm text-gray-700 text-justify lg:block hidden">
              {description(val?.description)}<b onClick={()=>{setShowfull(!showFull)}} className="text-blue-500">{showFull?"show less":"Show full"}</b>
            </p>
            {val?.count ? (
                <CounterComponent
                  handleIncrement={increment}
                  handleDecrement={decrement}
                  count={val?.count}
                />
              ) : null}
              <div class="flex mt-6 justify-between items-center">
                <p>
                  <span class="text-lg font-medium text-[#F36F1D] uppercase lg:text-xl">
                    ${val?.count?val?.price*val?.count:val?.price}
                  </span>
                </p>
                <div
                  onClick={val?.count == 0 ? increment : addToCart}
                  class="items-center cursor-pointer gap-3 justify-between inline-flex  font-medium py-2.5 text-center text-neutral-800 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black hover:shadow hover:text-black hover:p-3"
                >
                  {val?.count ? "Already added" : "Add to cart"} <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Card