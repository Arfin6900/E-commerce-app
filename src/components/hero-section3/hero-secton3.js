"use client";
import categories from "@/constants/hero-section3-data";
import React, { useEffect, useState } from "react";
import CounterComponent from "./counter-component";
import { useAppDispatch } from "@/lib/hooks";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/lib/features/cart/cartSlice";

const Herosecton3 = () => {
  return (
    <>
      {categories.map((val, index) => (
        <Category item={val} hide={index == 1 ? true : false} />
      ))}
    </>
  );
};

const Category = ({ hide, item }) => {
  const dispatch = useDispatch();
  const cartLenght = useSelector((state) => state);

  // Global variable
  const cart_data_from_storage =
    (typeof window !== "undefined" &&
      JSON.parse(window.localStorage.getItem("cartData"))) ||
    [];
  // States
  const [cartData, setCartdata] = useState(
    (!cart_data_from_storage && item.items) || []
  );
  const [realtimeData, setCartrealtimedata] = useState(cart_data_from_storage);

  useEffect(() => {
    const cartRenderData = filterAndModifyArray(item?.items, realtimeData);
    setCartdata(cartRenderData);
  }, []);

  // add to cart function

  const addToCart = (item2) => {
    cart_data_from_storage.push({ ...item2, count: 1 });
    typeof window !== "undefined" &&
      window.localStorage.setItem(
        "cartData",
        JSON.stringify(cart_data_from_storage)
      );
    let newdata = filterAndModifyArray(item.items, cart_data_from_storage);
    dispatch(addItem(cart_data_from_storage));
    setCartdata(newdata);
    setCartrealtimedata((prev) => [...prev, { ...item2, count: 1 }]);
  };

  // add to cart function

  const removeFromCart = (item2) => {
    const findCart = cart_data_from_storage?.find(
      (val) => item2.name == val.name
    );
    let deleteCart = cart_data_from_storage.filter(
      (val) => item2.name !== val.name
    );
    typeof window !== "undefined" &&
      window.localStorage.setItem("cartData", JSON.stringify(deleteCart));
    let newdata = filterAndModifyArray(item.items, deleteCart);

    setCartdata(newdata);
    setCartrealtimedata((prev) => [...prev, { ...item2 }]);
  };
  // increment of items

  const increment = (item2) => {
    const findCart = cart_data_from_storage?.find(
      (val) => item2.name == val.name
    );
    let deleteCart = cart_data_from_storage.filter(
      (val) => item2.name !== val.name
    );
    deleteCart.push({ ...findCart, count: findCart?.count + 1 });
    typeof window !== "undefined" &&
      window.localStorage.setItem("cartData", JSON.stringify(deleteCart));
    let newdata = filterAndModifyArray(item.items, deleteCart);
    dispatch(addItem(cart_data_from_storage));
    setCartdata(newdata);
    setCartrealtimedata((prev) => [
      ...prev,
      { ...item2, count: item2?.count + 1 },
    ]);
  };

  // decrement of items

  const decrement = (item2) => {
    const findCart = cart_data_from_storage?.find(
      (val) => item2.name == val.name
    );
    let deleteCart = cart_data_from_storage.filter(
      (val) => item2.name !== val.name
    );
    if (item2?.count == 0) {
      typeof window !== "undefined" &&
        window.localStorage.setItem("cartData", JSON.stringify(deleteCart));
      let newdata = filterAndModifyArray(item.items, deleteCart);
      dispatch(addItem(cart_data_from_storage));
      setCartdata(newdata);
      setCartrealtimedata((prev) => [...prev, { ...item2, count: 0 }]);
    } else {
      deleteCart.push({ ...findCart, count: findCart?.count - 1 });
      typeof window !== "undefined" &&
        window.localStorage.setItem("cartData", JSON.stringify(deleteCart));
      let newdata = filterAndModifyArray(item.items, deleteCart);
      dispatch(addItem(cart_data_from_storage));
      setCartdata(newdata);
      setCartrealtimedata((prev) => [
        ...prev,
        { ...item2, count: item2?.count - 1 },
      ]);
    }
  };

  // filtering 2 arrays 1 is added to cart and one is actual array

  function filterAndModifyArray(actualArray, secondArray) {
    // Loop through the actual array
    actualArray?.forEach((actualItem) => {
      // Find the corresponding item in the second array based on the ID
      let matchingItem =
        secondArray?.find(
          (secondItem) => secondItem.name === actualItem.name
        ) || false;

      // If a matching item is found, update the name property in the actual array
      if (matchingItem) {
        actualItem.count = matchingItem.count;
      }
    });

    return actualArray;
  }

  return (
    <div className="w-full flex flex-col justify-center align-center m-20 gap-20 ">
      <div
        className="flex flex-col gap-5"
        style={{ width: "80vw", alignSelf: "center" }}
      >
        {!hide && (
          <h1 className="text-2xl text-black font-bold leadi sm:text-4xl text-center">
            Menu
          </h1>
        )}
        <h1 className="text-2xl text-bold text-black text-center">
          {item.name}
        </h1>
        <p className="text-large text-bold text-black text-center">
          {item.description}
        </p>
      </div>
      <div
        className="flex self-center gap-10 lg:w-[80vw]"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // justifyContent: "space-around",
        }}
      >
        {cartData?.map((val, index) => (
          <Card
            val={val}
            key={index}
            addToCart={() => {
              addToCart(val);
            }}
            // removeFromCart={() => {
            //   removeFromCart(val);
            // }}
            increment={() => {
              increment(val);
            }}
            decrement={() => {
              decrement(val);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ val, addToCart, increment, decrement }) => {
  return (
    <section class="shadow rounded-3xl h-[max-content] lg:w-[390px] w-[270px] transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
      <div class="lg:order-first">
        <div class="flex flex-col">
          <div class="p-8 rounded-3xl ring-1 ring-white/10 shadow-sm">
            <div class="flex justify-between">
              <div class="flex items-center gap-3 flex-col w-full">
                <img src={val.image} className="w-40" />
                <p class="text-neutral-800 font-semibold">{val.name}</p>
              </div>
            </div>

            {val?.count ? (
              <CounterComponent
                handleIncrement={increment}
                handleDecrement={decrement}
                count={val?.count}
              />
            ) : null}

            <p class="mt-8 text-sm font-medium text-neutral-800">
              {val.description}
            </p>
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

export default Herosecton3;
