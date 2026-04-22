import { useContext } from "react";
import { Condition } from "../context/Statecontext";


export default function Confirmation() {
    const {setStepCells,chosenPlan,addons,planType,isYearly} = useContext(Condition);
    const {type,price} = chosenPlan;
    let extractedPrice = null;

    if (isYearly) {
        if (planType === 1) extractedPrice = parseInt(price?.slice(1,3));
       extractedPrice = parseInt(price?.slice(1,4))
    }else{
        if (planType === 1) extractedPrice = parseInt(price?.slice(1,2));
       extractedPrice = parseInt(price?.slice(1,3))
    }
    const addonsPrice = addons.map(({ cost,checked }) => {
      if (checked) {
        if (isYearly) {
            return parseInt(cost.slice(2, 4));
        } else {
            return parseInt(cost.slice(2, 3));
        }
      }
      return 0
    });
    
    addonsPrice.forEach(count => {
        extractedPrice += count;
    });
    
    return (
      <>
        <section className='bg-white justify-self-center col-span-3 lg:col-span-2 lg:row-span-2 lg:w-full py-8 mx-4 rounded-lg h-fit mb-3 -m-20 lg:m-0 shadow-2xl lg:shadow-none'>
          <div className='flex flex-col gap-y-4 px-6'>
            <div className='flex flex-col'>
              <h1 className='text-2xl lg:text-3xl font-semibold mb-2'>
                Finishing up
              </h1>
              <p className='text-[#9699ab] text-lg'>
                Double-check everything looks OK before confirming.
              </p>
            </div>
            <div className='bg-[#f0f3ff] h-auto px-6 py-4 rounded-lg'>
              <div className={`flex justify-between ${addons.every((tar)=>tar.checked === false) ? "":"border-b"} border-[#9699ab] pb-4`}>
                <div>
                  <p>{type} {isYearly ? "(yearly)":"(monthly)"}</p>
                  <button className='text-[#9699ab] underline active:text-[#473dff]' onClick={()=>setStepCells(2)}>Change</button>
                </div>
                <p>{price}</p>
              </div>
              {addons?.filter((type) => type.checked)?.map(({id,feature,cost}) => {
                  return (
                    <div key={id} className='flex justify-between my-4'>
                      <p className='text-[#9699ab]'>{feature}</p>
                      <p>{cost}</p>
                    </div>
                  );
                })}
            </div>
            <div className='flex justify-between px-4'>
              <p className='text-[#9699ab]'>Total ( per {isYearly ? "year":"month"} )</p>
              <p className='text-[#473dff] font-semibold'>{isYearly ? `+$${extractedPrice}/yr`:`+$${extractedPrice}/mo`}</p>
            </div>
          </div>
        </section>
      </>
    );
}
