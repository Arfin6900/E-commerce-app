"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from "./card";
import NotAnyItem from "./notAnyItem";

const ShoppingCart = () => {

  const isDevelopement=process.env.NODE_ENV=="production"?true:false
  
  const cart_data_from_storage =
    (typeof window !== "undefined" &&
      JSON.parse(window.localStorage.getItem("cartData"))) ||
    [];
  console.log(
    "🚀 ~ file: shopping-cart.js:5 ~ ShoppingCart ~ cart_data_from_storage:",
    cart_data_from_storage
  );
  const [cartData, setCartdata] = useState(cart_data_from_storage);
  const lineItems = cartData.filter((val=>val.count))?.map((val2)=>({ price:isDevelopement ? val2?.priceId : val2?.testPriceId , quantity:val2?.count }))
  const isItem = cartData.filter((val=>val.count))?.length
  console.log("🚀 ~ file: shopping-cart.js:17 ~ ShoppingCart ~ lineItems:", lineItems)
  const subTotal = cartData
    ?.filter((item) => item.count)
    ?.reduce((total, item) => total + item.price * item.count, 0);

  const deleteItem = (item2) => {
    let deleteCart = cart_data_from_storage.filter(
      (val) => item2.name !== val.name
    );
    typeof window !== "undefined" &&
      window.localStorage.setItem("cartData", JSON.stringify(deleteCart));
    setCartdata(deleteCart);
  };

  const handlePay = async () => {
    // const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    const stripe = await loadStripe("pk_test_O0tvaykjxmHJ8denijFUBbPy");
    console.log("🚀 ~ file: shopping-cart.js:31 ~ handlePay ~ stripe:", stripe);

    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      successUrl: "http://localhost:3000",
      cancelUrl: "http://localhost:3000",
      mode: "payment",
    });
  };

  return (
    <div class="h-screen bg-gray-100 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold text-black">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* Items  */}

       {isItem?
        <div class="rounded-lg md:w-2/3 max-h-[80vh] overflow-auto">
          {cartData
            ?.filter((val) => val?.count)
            ?.map((val) => (
              <Card
                val={val}
                deleteItem={deleteItem}
                setCartdata={setCartdata}
                cartData={cartData}
              />
            ))}
        </div>:<NotAnyItem />}

        

        
        
         
        {/* Total component */}

        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">${subTotal?subTotal - 1+.99:0}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">${subTotal?4.99:0}</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between text-black">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">${subTotal?subTotal - 1 + 5+.98:`0`} USD</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            onClick={handlePay}
            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};


export default ShoppingCart;
