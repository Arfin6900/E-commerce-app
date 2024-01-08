"use client";
import Link from "next/link";
import { useState } from "react";
import "./index.css";
const closeicon="/closeicon.webp"
const navContents = [
  {
    name: "Home",
    route: "/",
    route2: "/",
  },
  {
    name: "Services",
    route: "/services",
    route2: "services",
  },
  {
    name: "Contact",
    route: "/contact",
    route2: "contact",
  },
];

const NavigationDrawer = ({ishome}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={ishome?"drawer-navigation":"drawer-navigation2"}>
      <img src="/joqcafelogo.webp" alt="portfolio-logo" style={{ width: 120 , display:ishome?"none":"flex" }}  />
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

const Navigation = ({ isOpen , toggleDrawer}) => {
  return (
    <div style={{ zIndex: 5 }} className={`drawer-content`}>
      <div className="drawer-content-header">
        <img src="/joqcafelogo.webp" alt="portfolio-logo" style={{ width: 120 }} />
        <img src={closeicon} alt="portfolio-logo" style={{ width: 30, rotate: "180deg" }} onClick={toggleDrawer} />
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
      <Navitem item={val} setOpen={setOpen} open={open}/>
    </>
  );
};
const Navitem = ({ item, }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href={item.route} style={{ fontFamily: "poppins", fontSize: "1.5rem",color:"black"}}>{item.name}</a>
    </div>
  );
};
export default NavigationDrawer;
