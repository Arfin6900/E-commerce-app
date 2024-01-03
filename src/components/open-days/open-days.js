"use client";
import React from "react";

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
      <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
        <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h4 class="text-xl text-gray-900 font-bold">Come Grab a Cup !</h4>

          <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p- text-black w-[340px] ">
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

const Day = ({ isbold, item }) => {
  return (
    <div class="flex items-center w-full my-6 -ml-1.5">
      <div class="w-1/12 z-10">
        <div
          class={`w-3.5 h-3.5 ${
            item.time == "closed" ? "bg-red-600" : "bg-blue-600"
          }  rounded-full`}
        ></div>
      </div>
      <div class="w-11/12 flex items-center justify-between">
        <p
          style={{ fontWeight: isbold ? "bold" : "normal" }}
          class={`text-lg `}
        >
          {item.name}
        </p>
        <p
          style={{ fontWeight: isbold ? "bold" : "normal" }}
          class={`text-sm text-gray-500 `}
        >
          {item.time}
        </p>
      </div>
    </div>
  );
};

export default Availabledays;
