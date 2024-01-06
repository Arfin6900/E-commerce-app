"use client"
import React, { useState } from 'react';

const CounterComponent = ({handleIncrement,handleDecrement,count}) => {
  
  return (
    <div className="flex items-center justify-center mt-5">
      <button
        className="bg-green-500 text-white p-2 rounded-full mr-2"
        onClick={handleIncrement}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <p className="text-xl font-bold">{count}</p>
      <button
        className="bg-red-500 text-white p-2 rounded-full ml-2"
        onClick={handleDecrement}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CounterComponent;
