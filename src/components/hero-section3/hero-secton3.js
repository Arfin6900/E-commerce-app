import categories from "@/constants/hero-section3-data";
import React from "react";

const Herosecton3 = () => {
  return (
    <>
    {categories.map((val,index)=>(
    <Category item={val} hide={index==1?true:false} />
    ))}
    </>
  );
};
const Category = ({hide,item}) => {
  return (
    <div className="w-full flex flex-col justify-center align-center m-20 gap-20 ">
      <div
        className="flex flex-col gap-5"
        style={{ width: "80vw", alignSelf: "center" }}
      >
        {!hide&&<h1 className="text-2xl text-black font-bold leadi sm:text-4xl text-center">Menu</h1>}
        <h1 className="text-2xl text-bold text-black text-center">
          {item.name}
        </h1>
        <p className="text-large text-bold text-black text-center">
          {item.description}
        </p>
      </div>
      <div
        className="flex w-full"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
       {
        item.items?.map((val,index)=>(
          <Card val={val} key={index}/>
        ))
       }
      </div>
    </div>
  );
};
const Card = ({val}) => {
  return (
    <section class="shadow rounded-3xl lg:w-[390px] w-[270px] transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
      <div class="lg:order-first">
        <div class="flex flex-col">
          <div class="p-8 rounded-3xl ring-1 ring-white/10 shadow-sm">
            <div class="flex justify-between">
              <div class="flex items-center gap-3">
                <svg
                  class="w-8 h-8 text-black rounded-full"
                  viewBox="0 0 280 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="280" height="280" rx="32" fill="#d1cfdf"></rect>
                  <g clip-path="url(#clip0_501_1489)">
                    <path
                      d="M196.064 183.936L152.127 140L196.064 96.0636L240 140L196.064 183.936ZM83.9364 183.936L40 140L83.9364 96.0636L127.873 140L83.9364 183.936ZM140 240L96.0636 196.064L140 152.127L183.936 196.064L140 240ZM140 127.873L96.0636 83.9364L140 40L183.936 83.9364L140 127.873Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_501_1489">
                      <rect
                        width="200"
                        height="200"
                        fill="white"
                        transform="translate(40 40)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-neutral-800 font-semibold">{val.name}</p>
              </div>
              <p>
                <span class="text-lg font-medium text-neutral-800 uppercase lg:text-xl">
                  ${val?.price}
                </span>
              </p>
            </div>
            <p class="mt-8 text-sm font-medium text-neutral-800">
              {val.description}
            </p>
            <div class="flex mt-6">
              <a
                class="items-center justify-between inline-flex w-full font-medium py-2.5 text-center text-neutral-800 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black hover:shadow hover:text-black hover:p-3"
                href="#"
              >
                Order now <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosecton3;
