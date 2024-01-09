"use client";
import Link from "next/link";
import { useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
const closeicon = "/closeicon.webp";
const navContents = [
  {
    name: "Home",
    route: "/",
    route2: "/",
  },
  {
    name: "Items",
    route: "/#items",
    route2: "services",
  },
  {
    name: "Cart",
    route: "/cart",
    route2: "services",
  },
  {
    name: "Orders",
    route: "/orders",
    route2: "services",
  },
  {
    name: "Contact",
    route: "/#contact",
    route2: "contact",
  },
];

const NavigationDrawer = ({ ishome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={ishome ? "drawer-navigation" : "drawer-navigation2"}>
      <img
        src="/joqcafelogo.webp"
        alt="portfolio-logo"
        style={{ width: 120,height:"max-content", display: ishome ? "none" : "flex" }}
      />
      <div>
        <button
          onClick={toggleDrawer}
          className="text-xl p-4 focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && <Navigation toggleDrawer={toggleDrawer} />}
    </div>
  );
};

const Navigation = ({ isOpen, toggleDrawer }) => {
  return (
    <div style={{ zIndex: 5 }} className={`drawer-content`}>
      <div className="drawer-content-header">
        <img
          src="/joqcafelogo.webp"
          alt="portfolio-logo"
          style={{ width: 120 }}
        />
        <img
          src={closeicon}
          alt="portfolio-logo"
          style={{ width: 30, rotate: "180deg" }}
          onClick={toggleDrawer}
        />
      </div>
      <div className="drawer-content-data">
        {navContents.map((val) => (
          <NavitemLevel1 val={val} />
        ))}
      </div>
    </div>
  );
};

const NavitemLevel1 = ({ val }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navitem item={val} setOpen={setOpen} open={open} />
    </>
  );
};
const Navitem = ({ item }) => {
  const cart_data_from_storage =( typeof window !== "undefined" &&JSON.parse(window.localStorage.getItem("cartData") )) || [];
  const lenght_of_items =  cart_data_from_storage?.filter((val)=>(val?.count))?.length
  const items = useSelector(state => state.cart.items);
  const cartLenght = items.filter((val)=>(val?.count))?.length||lenght_of_items
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href={item.route} style={{ fontSize: "1.5rem", color: "black" }}>
        {item.name}
      </a>
     {item.name=="Cart"?<div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
         {cartLenght||0}
        </span>
      </div>:null}
    </div>
  );
};
export default NavigationDrawer;
