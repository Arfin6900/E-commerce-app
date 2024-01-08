const { default: CounterComponent } = require("./counter-component");

const Card = ({ val, addToCart, increment, decrement }) => {
    return (
      <section class="shadow rounded-3xl h-[max-content] lg:w-[390px] w-[270px] transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
        <div class="lg:order-first">
          <div class="flex flex-col">
            <div class="p-8 rounded-3xl ring-1 ring-white/10 shadow-sm">
              <div class="flex justify-between">
                <div class="flex items-center gap-3 flex-col w-full">
                  <img src={val.image} className="w-40" />
                  <p class="text-neutral-800 font-semibold">{val.name}</p>
                </div>
              </div>
  
              {val?.count ? (
                <CounterComponent
                  handleIncrement={increment}
                  handleDecrement={decrement}
                  count={val?.count}
                />
              ) : null}
  
              <p class="mt-8 text-sm font-medium text-neutral-800">
                {val.description}
              </p>
              <div class="flex mt-6 justify-between items-center">
                <p>
                  <span class="text-lg font-medium text-[#F36F1D] uppercase lg:text-xl">
                    ${val?.count?val?.price*val?.count:val?.price}
                  </span>
                </p>
                <div
                  onClick={val?.count == 0 ? increment : addToCart}
                  class="items-center cursor-pointer gap-3 justify-between inline-flex  font-medium py-2.5 text-center text-neutral-800 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black hover:shadow hover:text-black hover:p-3"
                >
                  {val?.count ? "Already added" : "Add to cart"} <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Card