"use client";
import categories from "@/constants/hero-section3-data";
import React from "react";
import Category from "./category";

const Herosecton3 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw]" style={{scrollBehavior:"smooth"}} id="items">
      {categories.map((val, index) => (
        <Category key={val.name} item={val} hide={index == 1 ? true : false} />
      ))}
      </div>
  );
};


export default Herosecton3;
