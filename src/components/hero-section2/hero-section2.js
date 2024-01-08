import hero2Data from "@/constants/hero-section2-data";
import React from "react";
import Card from "./card";

const Herosection2 = () => {
  return (
    <div className="lg:w-[90vw] w-[100vw]" style={{ display: "flex", flexDirection: "column", gap:50,background:"white",paddingBottom:40}}>
      <h1 className="text-2xl text-black font-bold leadi sm:text-4xl text-center">GRAB AND GO</h1>
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-around" }} className="lg:gap-0 gap-10">
        {hero2Data.map((val)=>(
          <Card val={val}/>
        ))}
      </div>
    </div>
  );
};


export default Herosection2;
