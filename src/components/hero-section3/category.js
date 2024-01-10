"use client"
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { useEffect, useState } from "react";
import { addItem } from "@/lib/features/cart/cartSlice";

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
    useEffect(() => {
      const cartRenderData = filterAndModifyArray(item?.items, cart_data_from_storage);
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
      } else {
             deleteCart.push({ ...findCart, count: findCart?.count - 1 });
             typeof window !== "undefined" &&
             window.localStorage.setItem("cartData", JSON.stringify(deleteCart));
             let newdata = filterAndModifyArray(item.items, deleteCart);
             dispatch(addItem(cart_data_from_storage));
             setCartdata(newdata);
             
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
      <div className="w-[100vw] flex flex-col justify-center align-center m-20 gap-20 ">
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
          className="flex self-center justify-center gap-10 lg:w-[80vw] w-[100vw]"
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
              key={`${val.name}${index}`}
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
  export default Category