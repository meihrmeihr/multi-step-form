import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useContext, useEffect } from "react";
import { Condition } from "../context/Statecontext";

export default function Plans() {
  const {
    planType,
    setPlanType,
    isYearly,
    setIsYearly,
    setChosenPlan,
    isNotSelected,
    setAddons,
  } = useContext(Condition);
  
  useEffect(() => {
    // check for isYearly variable changes
    setAddons((prevObj)=>{
      return prevObj.map(({id,feature,explainFeature,checked})=>{
        if (id === 1) return {id,feature,explainFeature,checked,cost: isYearly ? "+$10/yr" : "+$1/mo"}
        if (id === 2) return {id,feature,explainFeature,checked,cost: isYearly ? "+$20/yr" : "+$2/mo"}
        if (id === 3) return {id,feature,explainFeature,checked,cost: isYearly ? "+$20/yr" : "+$2/mo"}
      })
    });

    if (isYearly) {
      if (planType === 1) {
        setChosenPlan(() => ({ type:"Arcade", price:"$90/yr" }));
      } else if (planType === 2) {
        setChosenPlan(() => ({ type:"Advanced", price:"$120/yr" }));
      } else if (planType === 3) {
        setChosenPlan(() => ({ type:"Pro", price:"$150/yr" }));
      }
    } else {
      if (planType === 1) {
        setChosenPlan(() => ({ type:"Arcade", price:"$9/mo" }));
      } else if (planType === 2) {
        setChosenPlan(() => ({ type:"Advanced", price:"$12/mo" }));
      } else if (planType === 3) {
        setChosenPlan(() => ({ type:"Pro", price:"$15/mo" }));
      }
    }
  }, [isYearly, planType]);
  
  function options(image, type, price, gift, id) {
    return (
      <button
        className={`${planType === id ? "bg-[#f0f5ff] border-[#473dff]" : "bg-transparent border-[#c3c5d0]"} flex items-center lg:items-baseline lg:flex-col lg:justify-between gap-x-6 gap-y-6 border lg:min-h-48 lg:min-w-40 p-4 rounded-md hover:border-[#473dff]`}
        onClick={() => {
          setPlanType(id);
          setChosenPlan({ type, price });
        }}
      >
        <img
          src={image}
          className='h-10 lg:h-14 w-10 lg:w-14'
          alt='arcade icon'
        />
        <div className='flex flex-col items-baseline'>
          <h1 className='text-text-base lg:text-xl font-semibold'>{type}</h1>
          <p className='text-[#9699ab] text-sm lg:text-base'>{price}</p>
          <p
            className={`text-start text-sm lg:text-base transition-opacity duration-300 ${isYearly ? "block" : "hidden"}`}
          >
            {gift}
          </p>
        </div>
      </button>
    );
  }

  return (
    <>
      <section className='bg-white justify-self-center col-span-3 lg:col-span-2 row-span-2 py-8 rounded-lg h-fit sm:min-h-fit w-[80%] mb-3 -mt-20 lg:mt-0 lg:mx-20 lg:pl-10 p-4 mx-4 shadow-2xl lg:shadow-none'>
        <div className='flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-1'>
            <h1 className='text-2xl lg:text-3xl font-semibold'>
              Select your plan
            </h1>
            <p className='text-[#9699ab] '>
              You have the option of monthly or yearly billing.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row gap-y-4 gap-x-4 w-full'>
            {options(
              arcade,
              "Arcade",
              isYearly ? "$90/yr" : "$9/mo",
              "2 months free",
              1,
            )}
            {options(
              advanced,
              "Advanced",
              isYearly ? "$120/yr" : "$12/mo",
              "2 months free",
              2,
            )}
            {options(
              pro,
              "Pro",
              isYearly ? "$150/yr" : "$15/mo",
              "2 months free",
              3,
            )}
          </div>

          <div className='bg-[#ebf6ff] flex justify-center items-center gap-x-4 h-14 w-full py-2 rounded-lg'>
            <p className={`${!isYearly ? "font-semibold" : "text-[#9699ab]"}`}>
              Monthly
            </p>
            <button
              className='relative bg-[#02295a] w-12 h-6 rounded-full'
              onClick={() => setIsYearly((prev) => !prev)}
              type="button"
              role="this is a toggle button that doesn't need any text to explain its functionality it just select plans of buying"
            >
              <span
                className={`absolute top-1 transition-all ${isYearly ? "left-7" : "left-1"} bg-white w-4 h-4 rounded-full`}
              />
            </button>
            <p className={`${isYearly ? "font-semibold" : "text-[#9699ab]"} `}>
              Yearly
            </p>
          </div>
          {isNotSelected && <span className="text-center text-red-500">please select a plan </span>}
        </div>
      </section>
    </>
  );
}
