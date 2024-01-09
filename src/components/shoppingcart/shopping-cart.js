"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from "./card";
import NotAnyItem from "./notAnyItem";
import US_States from "@/constants/US-states";

const ShoppingCart = () => {
  const cart_data_from_storage =
  (typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("cartData"))) ||
  [];
  const [cartData, setCartdata] = useState(cart_data_from_storage);
  const [email, setEmail] = useState({email:"",valid:false});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({streetAddr:'',state:US_States[0],zipCode:'',valid:false});
  console.log("🚀 ~ file: shopping-cart.js:17 ~ ShoppingCart ~ address:", address)

  const isDevelopement=process.env.NODE_ENV=="production"?true:false
  


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
    const stripe = await loadStripe(!isDevelopement?process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST:process?.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_LIVE);
    console.log("🚀 ~ file: shopping-cart.js:31 ~ handlePay ~ stripe:", stripe);
    const user={
      name:name,
      email:email.email,
      address:address,
      phoneNumber:phone,
      total:`${subTotal?subTotal - 1 + 5+.98:`0`} USD`
    }
   typeof window !== "undefined" && window?.localStorage.setItem("userInfo",JSON.stringify(user))
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      successUrl: "http://localhost:3000/payment-success",
      cancelUrl: "http://localhost:3000/payment-failure",
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
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input style={{border:email?.email&&!email.valid?'1px solid red':"unset"}} onChange={(e)=>setEmail({email:e.target.value,valid:e.target.value.includes("@")&&e.target.value.includes(".com")})} value={email.email} type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      {/* Name */}
      <label for="name" class="mt-4 mb-2 block text-sm font-medium">Name</label>
      <div class="relative">
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id="name" name="name" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="John Smith" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
 
        </div>
      </div>

      {/* Phone Number */}

      <label for="name" class="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
      <div class="relative">
        <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="number" id="phone" name="phone" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="+1234567893" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
       </svg>

 
        </div>
      </div>

      <label  for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Delivery Address</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input onChange={(e)=>setAddress({...address,streetAddr:e.target.value,valid:e.target.value&&!!address?.state&&!!address?.zipCode})} value={address.streetAddr} type="text" id="address" name="address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="America" />
          </div>
        </div>
        <select  onChange={(e)=>setAddress({...address,state:e.target.value,valid:!!address?.streetAddr.length&&!!e.target.value&&!!address?.zipCode.length})} value={address.state} type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          {US_States.map((us)=>(<option>{us}</option>))}
        </select>
        <input onChange={(e)=>setAddress({...address,zipCode:e.target.value,valid:!!address?.streetAddr.length&&!!address?.state.length&&!!e.target.value})} value={address.zipCode} type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
      </div>

      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">${subTotal?subTotal - 1+.99:0}</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">${subTotal?4.99:0}</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">${subTotal?subTotal - 1 + 5+.98:`0`} USD</p>
      </div>
    </div>
    <abbr title={!email.valid?"valid email is Required":!name?"Name is required":!phone?"phone number is required":!address.valid?"Address is required":"Click to process your shopping"}><button disabled={!address.valid||!name||!email} onClick={handlePay} class={`mt-4 mb-8 w-full rounded-md ${!address.valid||!name||!email?"bg-gray-400":"bg-gray-900"} px-6 py-3 font-medium text-white`}>Place Order</button></abbr> 
  </div>
      </div>
    </div>
  );
};


export default ShoppingCart;
