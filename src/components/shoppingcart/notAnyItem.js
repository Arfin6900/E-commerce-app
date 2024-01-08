import { addToCart } from "@/constants/images";
import React from "react";
import ButtonContainer from "../buttons/buttonContainer";

const NotAnyItem = () => {
  return (
    <div class="justify-between items-center gap-4 mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start text-black flex-col">
       <img src={addToCart}/>
       <a href="/#items">
       <ButtonContainer>
        <p className="text-white font-bold">Add items to cart</p>
       </ButtonContainer>
       </a>
      </div>
  );
};

export default NotAnyItem;
