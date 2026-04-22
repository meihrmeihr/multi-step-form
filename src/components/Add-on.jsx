import { useContext } from "react";
import { Condition } from "../context/Statecontext";

export default function AddOn() {
  const { addons, setAddons } = useContext(Condition);

  return (
    <>
      <section className='bg-white justify-self-center col-span-3 lg:col-span-2 lg:row-span-2 lg:w-full py-8 mx-4 rounded-lg sm:h-fit mb-3 -m-20 lg:m-0 shadow-2xl lg:shadow-none'>
        <div className='flex flex-col gap-y-4 px-6'>
          <div className='flex flex-col'>
            <h1 className='text-2xl lg:text-3xl font-semibold mb-2'>Pick add-ons</h1>
            <p className='text-[#9699ab] text-lg'>
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          {addons.map(({ id, feature, explainFeature, checked, cost }) => {
            return (
              <div
                key={id}
                className={`${checked ? "bg-[#f0f5ff] border-[#473dff]" : "bg-transparent border-[#c3c5d0]"} flex justify-between items-center gap-x-2 border p-4 rounded-md hover:border-[#473dff]`}
              >
                <div className={`flex items-center gap-x-4`}>
                  {/* check icon */}
                  <button
                    onClick={() => {
                      setAddons(
                        addons.map((tar) =>
                          tar.id === id
                            ? {
                                id,
                                feature,
                                explainFeature,
                                checked: !tar.checked,
                                cost,
                              }
                            : tar,
                        ),
                      );
                    }}
                  >
                    {checked ? (
                      <svg
                        className='w-8 h-8 fill-[#473dff]'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <path d='M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M16.4696699,7.96966991 L10,14.4393398 L7.53033009,11.9696699 C7.23743687,11.6767767 6.76256313,11.6767767 6.46966991,11.9696699 C6.1767767,12.2625631 6.1767767,12.7374369 6.46966991,13.0303301 L9.46966991,16.0303301 C9.76256313,16.3232233 10.2374369,16.3232233 10.5303301,16.0303301 L17.5303301,9.03033009 C17.8232233,8.73743687 17.8232233,8.26256313 17.5303301,7.96966991 C17.2374369,7.6767767 16.7625631,7.6767767 16.4696699,7.96966991 Z' />
                      </svg>
                    ) : (
                      <svg
                        className='w-8 h-8 stroke-1 fill-[#9699ab]'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <path d='M5.75,3 L18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 Z M5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 L5.75,4.5 Z' />
                      </svg>
                    )}
                  </button>

                  <div className='flex flex-col items-baseline '>
                    <h1 className='lg:text-xl font-semibold'>{feature}</h1>
                    <p className='text-[#9699ab] text-sm lg:text-base'>
                      {explainFeature}
                    </p>
                  </div>
                </div>
                <p className='text-[#473dff]'>{cost}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
