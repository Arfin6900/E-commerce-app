"use client"
import { demoimg, done } from "@/constants/images";
import React from "react";
import OrderCard from "./orderCard";
import ButtonContainer from "../buttons/buttonContainer";
const Orders = () => {
  const cart_data_from_storage =
  (typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("cartData"))) ||
  [];
  const user_=typeof window !== "undefined" && window.localStorage.getItem("userInfo")
  const user=JSON.parse(user_)
  const orderLength=cart_data_from_storage.filter((val)=>val.count)?.length
  return (
    <div class="w-[80vw] flex items-center flex-col">
      <p className="text-4xl m-10 font-bold">Orders</p>
      <section className="lg:flex-row flex justify-between w-full font-bold flex-col">
        <div className="lg:flex-row flex flex-col items-center gap-3 lg:justify-start justify-center">
          <div className="flex gap-5">
          <p className="text-large">Status:</p>
          <img src={done} className="w-[30px]" />
          </div>
          <p className="lg:text-lg text-sm m-3">Payment completed successfully</p>
        </div>
        <div className="flex items-center gap-3 lg:justify-start justify-center">
          <p className="text-large">Order number:</p>
          <img src={done} className="w-[30px]" />
          <p className="text-large">4335932</p>
        </div>
      </section>
      <section
        className="w-full flex lg:flex-col   max-h-[70vh] mt-10 bg-white rounded-xl shadow-md p-6 pt-20 relative flex-col lg:overflow-auto overflow-auto"
        style={{ boxShadow: "inset 0px -4px 11px 0px #ece9e9" }}
      >
        <p className="text-large text-gray-800 absolute top-4 left-4 font-800">
          {orderLength} products
        </p>
        {
          cart_data_from_storage.filter((val)=>val.count)?.map((val)=>(
            <OrderCard val={val}/>
          ))
        }
      </section>
      <section className="flex justify-between lg:w-[100%] w-[100vw] lg:flex-row flex-col">
        <div className="flex items-center justify-center p-10">
          <p className="text-black taxt-large">Summary</p>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-ceenter gap-10">
      
           <Chipscontainer>
            <div className="flex h-14 w-14 rounded-[50%] bg-[white] items-center justify-center shadow-md">
              <div className="flex  h-10 w-10  rounded-[50%] justify-center items-center bg-[#2C67F9] ">
                <p className="text-white">{orderLength}</p>
              </div>
            </div>
            <p className="text-black text-large">Products</p>
           </Chipscontainer>
           <Chipscontainer justify={true}>
                <p className="text-black">Shipping</p>
            <p className="text-black text-large font-bold">$ 4.99</p>
           </Chipscontainer>
           <Chipscontainer justify={true}>
           <p className="text-black">Total</p>
            <p className="text-black text-large font-bold">${user?.total}</p>
           </Chipscontainer>
           <ButtonContainer>
            <p className="text-black text-large text-white font-bold">Invoice</p>
           </ButtonContainer>
        </div>
      </section>
    </div>
  );
};
const Chipscontainer=({children,justify})=>{
return(
  <section className={`w-40 h-14 bg-[#F6F7FA] items-center gap-[5px] flex pl-4 rounded-lg ${justify?'justify-center':'justify-start'}`}>
  {children}
</section>
)
}



export default Orders;
