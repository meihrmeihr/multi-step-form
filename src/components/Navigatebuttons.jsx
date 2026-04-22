import { useContext } from "react";
import { Condition } from "../context/Statecontext";

export default function NavigateButtons() {
  const {
    setIsSendingForm,
    stepCell,
    setStepCells,
    planType,
    setIsNotSelected,
    isConfirmed,
    setIsConfirmed,
  } = useContext(Condition);

  return (
    <>
      <section
        className={`bg-white lg:bg-transparent place-self-end lg:justify-self-start ${isConfirmed ? "hidden" : "flex"} justify-between items-center col-span-3 lg:col-span-2 row-span-1 px-4 py-4 max-h-20 w-full mx-auto`}
      >
        <button
          className={`${stepCell === 1 && "hidden"} text-[#9699ab] active:text-[#02295a] cursor-pointer`}
          onClick={() => {
            setStepCells((prevVal) =>
              prevVal !== 1 ? prevVal - 1 : (prevVal = 1),
            );
            if (stepCell === 2) {
              setIsSendingForm(false);
              setStepCells(1);
            }
          }}
        >
          Go Back
        </button>
        <button
          className={`${stepCell === 4 ? "bg-[#473dff] active:bg-[#7069fd]" : "bg-[#02295a] active:bg-[#003c86]"}  text-white py-2 px-4 rounded-sm lg:rounded-lg  cursor-pointer`}
          type='button'
          onClick={() => {
            if (stepCell === 4) setIsConfirmed(true);
            if (planType) {
              setStepCells((prevVal) =>
                prevVal !== 4 ? prevVal + 1 : prevVal,
              );
              setIsNotSelected(false);
            } else setIsNotSelected(true);
          }}
        >
          {stepCell === 4 ? "Confirm" : "Next Step"}
        </button>
      </section>
    </>
  );
}
