"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const ShoppingCart = () => {
  const cart_data_from_storage =
    (typeof window !== "undefined" &&
      JSON.parse(window.localStorage.getItem("cartData"))) ||
    [];
  console.log(
    "🚀 ~ file: shopping-cart.js:5 ~ ShoppingCart ~ cart_data_from_storage:",
    cart_data_from_storage
  );

  const [cartData, setCartdata] = useState(cart_data_from_storage);
  const [prices, setPrice] = useState(cart_data_from_storage.filter((item) => item.count)?.map((item) => ({ price: item?.priceId, quantity: item?.count })))
  console.log("🚀 ~ file: shopping-cart.js:10 ~ ShoppingCart ~ totalPrice:", prices)

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
    console.log("🚀 ~ file: shopping-cart.js:31 ~ handlePay ~ stripe:", stripe)

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1OVv9EBsvaxDJwymCWQkFw79', quantity: 1 }],
      successUrl: "http://localhost:3000",
      cancelUrl: "http://localhost:3000",
      mode: "payment"
    })
  };

  return (
    <div class="h-screen bg-gray-100 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* Items  */}

        <div class="rounded-lg md:w-2/3 max-h-[80vh] overflow-auto">
          {cartData
            ?.filter((val) => val?.count)
            ?.map((val) => (
              <Card
                val={val}
                deleteItem={deleteItem}
                setCartdata={setCartdata}
              />
            ))}
        </div>

        {/* Total component */}

        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">$129.99</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">$4.99</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">$134.98 USD</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button onClick={handlePay} class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ val, deleteItem }) => {
  const [count, setCount] = useState(val?.count);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={val?.image}
        alt="product-image"
        class="w-full rounded-lg sm:w-40"
      />
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">{val?.name}</h2>
          <p class="mt-1 text-xs text-gray-700 text-justify">
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
            <p class="text-sm">${val?.price}</p>
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
export default ShoppingCart;
