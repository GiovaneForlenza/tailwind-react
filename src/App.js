export default function App() {
  return (
    <main className="outline-2 h-screen bg-purple-50 flex items-center justify-center">
      <div id="container" className="p-10 bg-white shadow-md w-[1150px]">
        <div id="header" className="w-full  flex justify-between">
          <input
            type="text"
            placeholder="Search City"
            className="w-full border-2 p-2 mr-4 rounded-md"
          />
          <button className="py-2 px-6 bg-blue-200 text-xl rounded-md hover:bg-blue-300">
            Search
          </button>
        </div>
        <div id="content" className="mt-10 ">
          <div id="title" className="flex flex-row items-center">
            <div id="icon" className=" w-20">
              <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
            </div>
            <div
              id="cityName"
              className=" text-5xl text-blue-600 font-semibold"
            >
              Seattle
            </div>
          </div>
          <div id="information" className="">
            <span className="mt-1 text-slate-500 text-xl block">
              Thursday, 8:18 PM
            </span>
            <span className="mt-1 text-3xl text-blue-600 font-bold block">
              26º C
            </span>
            <span className="mt-1"> Cloudy | </span>
            <span className="mt-1"> Wind: 2km/h | </span>
            <span className="mt-1"> Humidity: 83%</span>
          </div>
          <div id="divider" className="h-1 border-b-2 m-8"></div>
          <div id="forecast">
            <div id="hourly" className=" flex justify-between px-10">
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Fri</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>26º</span>{" "}
                  <span className="text-slate-500"> | 17º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Sat</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>32º</span>{" "}
                  <span className="text-slate-500"> | 23º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Sun</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>25º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Mon</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Tue</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Wed</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>25º</span>{" "}
                  <span className="text-slate-500"> | 20º</span>
                </div>
              </div>
            </div>

            <div id="divider" className="h-1 border-b-2 m-8"></div>

            <div id="hourly" className=" flex justify-between px-10">
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
              <div className="w-[100px] h-[100px] rounded-md items-center flex flex-col">
                <div>Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  className="w-12"
                />
                <div>
                  <span>29º</span>{" "}
                  <span className="text-slate-500"> | 18º</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
