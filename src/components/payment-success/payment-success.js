"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
const Paymentsuccess = () => {
    const cart_data_from_storage =
    (typeof window !== "undefined" &&
      JSON.parse(window.localStorage.getItem("cartData"))) ||
    [];

    function formatDate(inputDate) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
      
        return formattedDate;
      }
      const currentDate = new Date();

    const navigate=useRouter()
    const user_=typeof window !== "undefined" && window.localStorage.getItem("userInfo")
    const user=JSON.parse(user_)
    useEffect(()=>{
       if(!user){
        navigate.back()
       }else{
        try {
            const templateParams = {
              name: user?.name,
              email: user?.email,
              phoneNumber: user?.phoneNumber,
              address:user?.address,
              date:formatDate(currentDate),
              items:cart_data_from_storage?.filter((val)=>(val?.count))?.length,
              total:user?.total

            };
            console.log("🚀 ~ useEffect ~ templateParams:", templateParams)
            //  sendEmail(templateParams);
             console.log("email sent successfull ")
          } catch (error) {
            // Handle errors
          }
       }
    },[user])
  return (
    <div class="bg-gray-100 h-screen">
    <div class="bg-white p-6  md:mx-auto">
      <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
          </path>
      </svg>
      <div class="text-center">
          <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
          <p class="text-gray-600 my-2">Thank you <b>{user?.name}</b> for completing your secure online payment.</p>
          <p> Have a great day!  </p>
          <div class="py-10 text-center">
              <a onClick={()=>{navigate.push('/')}} class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                  GO BACK 
             </a>
          </div>
      </div>
  </div>
</div>
  )
}

export default Paymentsuccess
