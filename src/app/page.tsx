"use client";
import { useState  } from "react";
import "./ligth.css";
import "./dark.css";
import "./globals.css"


 export default function Home() { 
  const [isClicked, setIsClicked] = useState(true);


  const handleClick = () => {
    setIsClicked(!isClicked); 
   
  };
  
  return ( <>
  <div className={` ${isClicked ? 'bg' : 'dark-bg'} `}>
    
  <div className={"flex justify-center pt-20 "}>

    <div className="w-[1249px] h-[673px]  flex flex-col  justify-between ">
    <div className="flex items-center">
  <div className="m-1 flex items-center justify-center w-max hover:border-b-4 hover:rounded-sm hover:border-solid hover:border-blue-500">
    <text className={` ${isClicked ? 'bg-sport' : 'dark-bg-sport'} mb-1 font-poppins text-2xl font-bold leading-9 text-left tracking-tight`}>Sports</text>
  </div>
  <div className="ml-auto">
  <button
    className={`relative w-11 h-6 rounded-full ${isClicked ? 'bg-gray-700' : 'bg-gray-50'} `}
    onClick={handleClick}
  >
    <span
      className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform ${
        isClicked ? 'transform translate-x-full' : 'bg-gray-700'
      }`}
    ></span>
    <span className="sr-only">{isClicked ? 'On' : 'Off'}</span>
  </button>
</div>
    </div>
      
      <div className="grid grid-flow-row-dense grid-cols-5   place-items-center w-[1249px] h-[673px]">
        <div className= {`col-span-1 w-[238.53px] h-[511px]  ${isClicked ? 'bg-image' : 'dark-bg-image'} hover:border hover:shadow-xl flex flex-col items-center justify-center`}>
          <div className="w-[218.4px] h-[385.31px] m-2 bg-image1"></div>
          <div className="w-[218.4px] h-[21px] flex-grow  -mt-2">
            <text className={` ${isClicked ? 'bg-image-name' : 'dark-bg-image-name'}`}>Sacramento River Cats</text>
          </div>
          <div className={`w-[218.4px] h-[54px]  ${isClicked ? 'bg-image-stat ' : 'dark-bg-image-stat '} flex-grow mb-2 flex  items-center`}>
            <div className="grid grid-cols-2 gap-3 w-[218.4px] m-2 ">
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Total events</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>48 Events</text>
              </div>
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Sport</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>Baseball</text>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-1 w-[238.53px] h-[511px]  ${isClicked ? 'bg-image' : 'dark-bg-image'} hover:border hover:shadow-xl flex flex-col items-center justify-center`}>
          <div className="w-[218.4px] h-[385.31px] m-2 bg-image2"></div>
          <div className="w-[218.4px] h-[21px] flex-grow  -mt-2">
            <text className={` ${isClicked ? 'bg-image-name' : 'dark-bg-image-name'}`}>Las Vegas Aviators</text>
          </div>
          <div className={`w-[218.4px] h-[54px]  ${isClicked ? 'bg-image-stat ' : 'dark-bg-image-stat '} flex-grow mb-2 flex  items-center`}>
            <div className="grid grid-cols-2 gap-3 w-[218.4px] m-2 ">
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Total events</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>28 Events</text>
              </div>
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Sport</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>Baseball</text>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-1 w-[238.53px] h-[511px]  ${isClicked ? 'bg-image' : 'dark-bg-image'} hover:border hover:shadow-xl flex flex-col items-center justify-center`}>
          <div className="w-[218.4px] h-[385.31px] m-2 bg-image3"></div>
          <div className="w-[218.4px] h-[21px] flex-grow  -mt-2">
            <text className={` ${isClicked ? 'bg-image-name' : 'dark-bg-image-name'}`}>New Jersey Devils</text>
          </div>
          <div className={`w-[218.4px] h-[54px]  ${isClicked ? 'bg-image-stat ' : 'dark-bg-image-stat '} flex-grow mb-2 flex  items-center`}>
            <div className="grid grid-cols-2 gap-3 w-[218.4px] m-2 ">
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Total events</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>15 Events</text>
              </div>
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Sport</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>Ice Hockey</text>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-1 w-[238.53px] h-[511px]  ${isClicked ? 'bg-image' : 'dark-bg-image'} hover:border hover:shadow-xl flex flex-col items-center justify-center`}>
          <div className="w-[218.4px] h-[385.31px] m-2 bg-image4"></div>
          <div className="w-[218.4px] h-[21px] flex-grow  -mt-2">
            <text className={` ${isClicked ? 'bg-image-name' : 'dark-bg-image-name'}`}>Las Vegas Aviators</text>
          </div>
          <div className={`w-[218.4px] h-[54px]  ${isClicked ? 'bg-image-stat ' : 'dark-bg-image-stat '} flex-grow mb-2 flex  items-center`}>
            <div className="grid grid-cols-2 gap-3 w-[218.4px] m-2 ">
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Total events</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>28 Events</text>
              </div>
              <div className=" flex flex-col items">
                <text className={`mb-1 bg-image-stat-info1  ${isClicked ? 'bg-image-stat-info1 ' : 'dark-bg-image-stat-info1 '}`}>Sport</text>
                <text className={` ${isClicked ? 'bg-image-stat-info2' : 'dark-bg-image-stat-info2'}`}>Baseball</text>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-1 w-[238.53px] h-[511px]  ${isClicked ? 'bg-image' : 'dark-bg-image'} hover:border hover:shadow-xl flex flex-col items-center justify-center`}>
          <div className="relative w-[218.4px] h-[218px] mt-2 bg-image5">
            <div className="absolute top-0 right-0 w-[48.09px] h-[25px] bg-image5-Ad flex items-center justify-center">
              <span className="text-white">Ad</span>
            </div>
          </div>
          <div className={`w-[218.4px] flex-grow mb-2 bg-image5-border flex items-center justify-center`}>
            <div className="flex flex-col items-center justify-center  ">
              <p className={`w-[188.21px] h-[24px]  ${isClicked ? 'bg-image5-title' : 'dark-bg-image5-title'} mb-2 flex justify-center items-center`}>Advertisement title</p>
              <p className={`w-[188.34px] h-[171px]  ${isClicked ? 'bg-image5-info' : 'dark-bg-image5-info'} flex justify-center items-center`}> Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore magna <br /> aliqua. Lorem ipsum dolor sit <br /> amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore <br /> magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center ">
        <div className="w-[124.8px] h-[46px]  hover:shadow-xl place-items-center flex items-center justify-center  button">
          <text className="m-2 flex justify-center items-center button-text">See More</text>
        </div>
      </div>
      
    </div>
  </div>


  <div className="flex justify-center mt-20 pb-20 ">
    <div className={`w-[1249px] h-[918px]   ${isClicked ? 'bg-below' : 'dark-bg-below'} flex items-center justify-center`}>
      <div className="grid w-[1085.75px] h-[799px]  grid-flow-row auto-rows-max ">
        <div className="row-span-1 flex items-center justify-center h-[52px]">
          <text className={`${isClicked ? 'bg-below-title ' : 'dark-bg-below-title '}`}>Collection Spotlight</text>
        </div>
        <div className="row-span-1  h-[46px]  flex items-center justify-center mt-3  ">
          <text className={` ${isClicked ? 'bg-below-des' : 'dark-bg-below-des'} `}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today! </text>
        </div>
        <div className="row-span-1 relative  flex items-center justify-center mt-4  ">
          <div className="w-[36.75px] h-[49px] absolute inset-x-center start-0  flex items-center justify-center border border-blue-500">
            <div className="bg-below-vector1 ">
              
            </div>
          </div>
          <div className=" h-[625px] grid grid-flow-row-dense grid-cols-3  place-items-center gap-5  ">
            <div className={`col-span-1 w-[257px] h-[625px]   ${isClicked ? 'bg-below-image1' : 'dark-bg-below-image1'} hover:shadow-xl  flex flex-col items-center justify-center`}>
              <div className="w-[226.1px] h-[597.91px]  flex flex-col items-center justify-top ">
                <div className="w-[226.1px] h-[401.25px] bg-below-image2"></div>
                <div className={`w-[211px] border-t border-dashed  ${isClicked ? 'bg-below-divider' : 'dark-bg-below-divider'}`}></div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[213px] h-[100.66px] mt-4 flex flex-col between  justify-between">
                    <div className="flex items-center justify-center ">
                      <text className={` ${isClicked ? 'bg-below-image1-title' : 'dark-bg-below-image1-title'}`}>Las Vegas Aviators</text>
                    </div>
                    <div className="flex items-center justify-center ">
                      <text className={` ${isClicked ? 'bg-below-image1-date' : 'dark-bg-below-image1-date'}`}>OCT 15 | SUN | 4:30 PM</text>
                    </div>
                    <div className="flex items-center justify-center ">
                      <text className={`  ${isClicked ? 'bg-below-image1-info' : 'dark-bg-below-image1-info'} `}>Las Vegas Ballpark, Las Vegas, Nevada</text>
                    </div>
                  </div>
                  <div className="w-[213px] h-[36px]  flex flex-col items-center justify-center bg-below-image1-but">
                    <text className={` ${isClicked ? 'bg-below-image1-but-text' : 'dark-bg-below-image1-but-text'}`}> Take Flight Collection </text>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-span-1 w-[257px] h-[625px]   ${isClicked ? 'bg-below-image1' : 'dark-bg-below-image1'} hover:shadow-xl  flex flex-col items-center justify-center`}>
              <div className="w-[226.1px] h-[597.91px]  flex flex-col items-center justify-top ">
                <div className="w-[226.1px] h-[401.25px] bg-below-image3"></div>
                <div className={`w-[211px] border-t border-dashed  ${isClicked ? 'bg-below-divider' : 'dark-bg-below-divider'}`}></div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[213px] h-[100.66px] mt-4 flex flex-col between  justify-between">
                    <div className="flex items-center justify-center ">
                      <text className={` ${isClicked ? 'bg-below-image1-title' : 'dark-bg-below-image1-title'}`}>Sacramento River Catss</text>
                    </div>
                    <div className="flex items-center justify-center ">
                      <text className={` ${isClicked ? 'bg-below-image1-date' : 'dark-bg-below-image1-date'}`}>OCT 15 | SUN | 4:30 PM</text>
                    </div>
                    <div className="flex items-center justify-center ">
                      <text className={`  ${isClicked ? 'bg-below-image1-info' : 'dark-bg-below-image1-info'} `}>Sutter Health Park, Sacramento, California</text>
                    </div>
                  </div>
                  <div className="w-[213px] h-[36px]  flex flex-col items-center justify-center bg-below-image1-but">
                    <text className="bg-below-image1-but-text"> Orange Collection </text>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-span-1 w-[257px] h-[625px]   ${isClicked ? 'bg-below-image1' : 'dark-bg-below-image1'} hover:shadow-xl  flex flex-col items-center justify-center`}>
              <div className="w-[226.1px] h-[597.91px]  flex flex-col items-center justify-top ">
                <div className="w-[226.1px] h-[401.25px] bg-below-image2"></div>
                <div className={`w-[211px] border-t border-dashed  ${isClicked ? 'bg-below-divider' : 'dark-bg-below-divider'}`}></div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[213px] h-[100.66px] mt-4 flex flex-col between  justify-between">
                    <div className="flex items-center justify-center ">
                      <text className={` ${isClicked ? 'bg-below-image1-title' : 'dark-bg-below-image1-title'}`}>Las Vegas Aviators</text>
                    </div>
                    <div className="flex items-center justify-center ">
                      <text className={` ${isClicked ? 'bg-below-image1-date' : 'dark-bg-below-image1-date'}`}>OCT 15 | SUN | 4:30 PM</text>
                    </div>
                    <div className="flex items-center justify-center ">
                      <text className={`  ${isClicked ? 'bg-below-image1-info' : 'dark-bg-below-image1-info'} `}>Las Vegas Ballpark, Las Vegas, Nevada</text>
                    </div>
                  </div>
                  <div className="w-[213px] h-[36px] flex flex-col items-center justify-center bg-below-image1-but">
                    <text className="bg-below-image1-but-text"> Take Flight Collection </text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[36.75px] h-[49px] absolute inset-y-center end-0 flex items-center justify-center border border-blue-500">
            <div className="bg-below-vector2 "></div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  </div>
</> ); }