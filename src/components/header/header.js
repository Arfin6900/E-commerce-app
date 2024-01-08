"use client";
import React from "react";
import NavigationDrawer from "../nav-mobile/nav-mobile";
import { usePathname } from "next/navigation";
import { app_logo } from "@/constants/images";
// import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";

const Header = () => {
  const cart_data_from_storage =(typeof window !== "undefined" &&JSON.parse(window.localStorage.getItem("cartData"))) || [];
 const lenght_of_items=cart_data_from_storage?.filter((val)=>(val?.count))?.length
 const items = useSelector(state => state.cart.items);
 const cartLenght=items.filter((val)=>(val?.count))?.length||lenght_of_items
  console.log("🚀 ~ file: hero.js:6 ~ Hero ~ cart:", cartLenght)

  const path = usePathname();
  const pathName = path.split("/")[1];
  
  return (
    <>
      <NavigationDrawer />
      <div class="bg-white hidden lg:block " style={{ width: "100vw" }}>
        <div class="border py-3 px-6">
          <div class="flex justify-between items-center">
            <a href="/" class="flex items-center">
              <img class="w-80 h-auto mr-2" src={app_logo} alt="logo" />
            </a>

            <div class="ml-6 flex flex-1 gap-x-3">
              <input
                type="text"
                placeholder="search"
                class="w-full h-[50px] rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
              />
            </div>

            <div class="ml-2 flex">
              <a href="/orders" class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium text-black">Orders</span>
              </a>

              <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium text-black">Favorites</span>
              </div>

             {pathName!=="cart"?<div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div class="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {cartLenght || 0}
                  </span>
                </div>
                <a href="/cart" class="text-sm font-medium text-black">Cart</a>
              </div>:null}

              {pathName == "login" ? (
                <a href="/signup" class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                  <p  class="text-sm font-medium text-black">
                    Sign up
                  </p>
                </a>
              ) : (
                <a href="login" class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                  <p  class="text-sm font-medium text-black">
                    Sign in
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
