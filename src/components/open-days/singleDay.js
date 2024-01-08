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
export default Day