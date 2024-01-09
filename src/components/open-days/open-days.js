"use client";
import React from "react";
import Day from "./singleDay";

const days = [
  {
    name: "Monday",
    time: "09:00 am – 05:00 pm",
    s_name: "Mon",
  },
  {
    name: "Tuesday",
    time: "09:00 am – 05:00 pm",
    s_name: "Tue",
  },
  {
    name: "Wednesday",
    time: "09:00 am – 05:00 pm",
    s_name: "Wed",
  },
  {
    name: "Thursday",
    time: "09:00 am – 05:00 pm",
    s_name: "Thu",
  },
  {
    name: "Friday",
    time: "09:00 am – 05:00 pm",
    s_name: "Fri",
  },
  {
    name: "Satarday",
    time: "closed",
    s_name: "Sat",
  },
  {
    name: "Sunday",
    time: "closed",
    s_name: "Sun",
  },
];

const Availabledays = () => {
  const date = new Date();
  const day = date.toDateString().split(" ")[0];
  console.log("day", day);
  return (
    <section class="dark:text-black text-black w-full bg-white">
      <div class="container flex flex-col justify-center lg:p-6 p-0 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
        <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h4 class="text-xl text-gray-900 font-bold">Come Grab a Cup !</h4>

          <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 text-black w-[90vw] ">
            <div class="relative p-5 ">
              <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
              {days.map((val) => {
                if (day == val.s_name) {
                  return <Day item={val} isbold={true} />;
                } else {
                  return <Day item={val} />;
                }
              })}
            </div>
          </div>
        </div>
        <img
          src="/hero-img.webp"
          alt=""
          class="object-contain lg:w-[400px] w-auto"
        />
      </div>
    </section>
  );
};



export default Availabledays;
