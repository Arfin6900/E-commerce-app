import React from 'react'

const Paymentfailure = () => {
  return (
    <div class="bg-gray-100 h-screen">
    <div class="bg-white p-6  md:mx-auto">

      <svg viewBox="0 0 24 24" class="text-red-600 w-16 h-16 mx-auto my-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
</svg>

      <div class="text-center">
          <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Failed!😕</h3>
          <p class="text-gray-600 my-2">Something went wrong</p>
          <div class="py-10 text-center">
              <a href="/" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                  GO BACK 
             </a>
          </div>
      </div>
  </div>
</div>
  )
}

export default Paymentfailure
