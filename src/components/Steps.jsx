import { useContext, useEffect, useState } from "react";
import bigSidebar from "../assets/images/bg-sidebar-desktop.svg";
import smallSidebar from "../assets/images/bg-sidebar-mobile.svg";

import { Condition } from "../context/Statecontext";

export default function Steps() {
  const { stepCell } = useContext(Condition);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.onresize = () => setWidth(window.innerWidth);
  })
  
  function stepsCount(number, step, info) {
    return (
      <div className='flex justify-center items-center gap-x-6'>
        <span
          className={`${stepCell === Number(number) ? "bg-[#bfe2fd]" : "bg-transparent text-white border border-white"} flex justify-center items-center text-[#02295a] text-lg h-6 w-6 p-6 rounded-full`}
        >
          {number}
        </span>
        <div className='hidden lg:block'>
          <h1 className={"text-[#9699ab] font-thin"}>{step}</h1>
          <p className='text-white font-semibold'>{info}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* sidebar section */}
      <section
        className='bg-center lg:block flex justify-center items-center bg-cover bg-no-repeat col-span-3 lg:col-span-1 row-span-1 lg:row-span-3 lg:rounded-lg'
        style={{
          backgroundImage: `url("${width >= 1024 ? bigSidebar : smallSidebar}")`,
        }}
      >
        <div className='flex justify-center items-start lg:flex-col gap-x-4 lg:gap-y-6 p-6 h-40 lg:h-auto'>
          {stepsCount(1, "STEP 1", "YOUR INFO")}
          {stepsCount(2, "STEP 2", "SELECT PLAN")}
          {stepsCount(3, "STEP 3", "ADD-ONS")}
          {stepsCount(4, "STEP 4", "SUMMERY")}
        </div>
      </section>
    </>
  );
}
