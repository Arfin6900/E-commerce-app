import React from "react";

const Herosection2 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw",gap:20,background:"white",paddingBottom:40}}>
      <h1 className="text-2xl text-black font-bold leadi sm:text-4xl text-center">GRAB AND GO</h1>
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-around" }}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        gap:10
      }}
    >
      <img
        class="object-contain rounded-md h-72 sm:h-80 lg:h-120 xl:h-140 2xl:h-120"
        src="hero-img.webp"
        style={{borderRadius:"50%"}}
      />
      <h2 className="text-2xl ttext-bold text-black">Our Concept</h2>
      <p className="text-base text-center text-black">
        Joq Cafe is a unique grab and go serving you Fresh Juices Vegan
        Desserts.
      </p>
    </div>
  );
};

export default Herosection2;
