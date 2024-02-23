function Statistics() {
    return (
        <div class="flex flex-col w-full 2xl:w-2/3">
         
        <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 px-2 py-1 md:p-8">
          <h4 class="text-xl text-gray-900 font-bold">Statistics</h4>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-8 mt-4">
            <div
              class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"
            >
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-indigo-600"
                  >Total Revenue</span
                >
                <span
                  class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
                  >7 days</span
                >
              </div>
              <div class="flex items-center justify-between mt-6">
               <div>
                  <svg class="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-end">
                    <span class="text-2xl 2xl:text-3xl font-bold"
                      >$8,141</span
                    >
                    <div class="flex items-center ml-2 mb-1">
                      <svg
                        class="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                      <span class="font-bold text-sm text-gray-500 ml-0.5"
                        >3%</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"
            >
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-green-600"
                  >New Orders</span
                >
                <span
                  class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
                  >7 days</span
                >
              </div>
              <div class="flex items-center justify-between mt-6">
               <div>
                  <svg class="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-end">
                    <span class="text-2xl 2xl:text-3xl font-bold">217</span>
                    <div class="flex items-center ml-2 mb-1">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      <span class="font-bold text-sm text-gray-500 ml-0.5"
                        >5%</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"
            >
              <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-blue-600"
                  >New Connections</span
                >
                <span
                  class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default"
                  >7 days</span
                >
              </div>
              <div class="flex items-center justify-between mt-6">
              <div>
                  <svg class="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-end">
                    <span class="text-2xl 2xl:text-3xl font-bold">54</span>
                    <div class="flex items-center ml-2 mb-1">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      <span class="font-bold text-sm text-gray-500 ml-0.5"
                        >7%</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    );
}

export default Statistics;