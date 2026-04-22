import { useContext } from "react";
import { Condition } from "../context/Statecontext";

import Steps from "./Steps";
import PersonalForm from "./Personalform";
import Plans from "./Plans";
import AddOn from "./Add-on";
import Confirmation from "./Confirmation";
import SuccessMassage from "./Successmessage";
import NavigateButtons from "./Navigatebuttons";

export default function Home() {
    const {stepCell, isSendingForm,isConfirmed} = useContext(Condition);
    
    return (
      <>
        <main className='bg-blue-50 flex justify-center items-center text-[#02295a] text-base font-ubuntu min-h-screen'>
          {/* main section */}
          <section className='lg:bg-white relative grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 h-screen lg:h-[85dvh] w-full lg:w-fit lg:p-4 rounded-lg'>
            <Steps />
            { !isConfirmed && stepCell === 1 && <PersonalForm />}
            {stepCell === 2 && <Plans />}
            {stepCell === 3 && <AddOn />}
            {!isConfirmed && stepCell === 4 && <Confirmation />}
            {isConfirmed && <SuccessMassage />}
            {isSendingForm && <NavigateButtons />}
          </section>
        </main>
      </>
    );
}
