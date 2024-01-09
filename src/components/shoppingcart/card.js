"use client"

import { useState } from "react";

const Card = ({ val, deleteItem, cartData, setCartdata }) => {
    const [count, setCount] = useState(val?.count);


    // Increment=============> +


    const incrementCount = () => {
           setCount((prev) => prev + 1);
  
           // Find the index of the item in cartData
           const itemIndex = cartData.findIndex((val2) => val2.name === val.name);
  
           // If the item is not in the cart, add it with the updated count
           if (itemIndex === -1) {
              setCartdata([...cartData, { ...val, count: count + 1 }]);
           } else {
               // If the item is already in the cart, update its count
               const updatedCartData = [...cartData];
               updatedCartData[itemIndex] = {
               ...updatedCartData[itemIndex],
               count: count + 1,
             };
            setCartdata(updatedCartData);
      }
    };
    
  // Decrement=============> -


    const decrementCount = () => {
           if (count !== 1) {
                      setCount((prev) => prev - 1);
                      // Find the index of the item in cartData
                      const itemIndex = cartData.findIndex((val2) => val2.name === val.name);
  
                     // If the item is not in the cart, add it with the updated count
                  if (itemIndex === -1) {
                      setCartdata([...cartData, { ...val, count: count - 1 }]);
                     } 
                 else {
                      // If the item is already in the cart, update its count
                     const updatedCartData = [...cartData];
                     updatedCartData[itemIndex] = {
                     ...updatedCartData[itemIndex],
                     count: count - 1,
                   };
                 setCartdata(updatedCartData);
        }
      }
    };
  
    return (
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start text-black">
        <img
          src={val?.image}
          alt="product-image"
          class="w-full rounded-lg sm:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between gap-4">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{val?.name}</h2>
            <p class="mt-1 text-sm text-gray-700 text-justify">
              {val?.description}
            </p>
          </div>
          <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span
                onClick={decrementCount}
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                -{" "}
              </span>
              <p className="text-sm">{count || val?.count}</p>
              <span
                onClick={incrementCount}
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                +{" "}
              </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm">${val?.price * count}</p>
              <svg
                onClick={() => {
                  deleteItem(val);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card