import { useContext, } from "react";
import { Condition } from "../context/Statecontext";

export default function PersonalForm() {
  const {
    setStepCells,
    isSendingForm,
    setIsSendingForm,
    keepValues,
    setKeepValues,
    handleError,
    setHandleError,
  } = useContext(Condition);

  // handle submission
  function handleSubmit(e) {
    e.preventDefault();
    const collectData = new FormData(e.currentTarget);
    let error = false;
    const isValidName = /^[a-zA-Z]+$/.test(collectData.get("personName"));
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        collectData.get("emailAddress"),
      );
    const isValidPhoneNumber = /^\+?[1-9]\d{0,3}[-.\s]?\d{1,14}$/.test(
      collectData.get("phoneNumber"),
    );
    // keep the values for regretion
    setKeepValues({
      name: collectData.get("personName"),
      emailAddress: collectData.get("emailAddress"),
      phoneNumber: collectData.get("phoneNumber"),
    });
    if (!isValidName) {
      setHandleError("personName");
      error = true;
      return;
    }

    if (!isValidEmail) {
      setHandleError("emailAddress");
      error = true;
      return;
    }
    if (!isValidPhoneNumber) {
      setHandleError("phoneNumber");
      error = true;
    }
    if (error) return;
    error = false;
    setIsSendingForm(true);
    setStepCells(2);
  }

  // contruction of input
  function makeInput(labelName, labelId, inputType, placeholder) {
    const nameError = handleError === "personName" && labelId === "personName";
    const emailError =
      handleError === "emailAddress" && labelId === "emailAddress";
    const phoneError =
      handleError === "phoneNumber" && labelId === "phoneNumber";

    return (
      <div className='relative flex flex-col'>
        <label htmlFor={labelId}>{labelName}</label>
        <input
          id={labelId}
          name={labelId}
          type={inputType}
          defaultValue={
            (inputType === "text" && keepValues.name) ||
            (inputType === "email" && keepValues.emailAddress) ||
            (inputType === "tel" && keepValues.phoneNumber) ||
            ""
          }
          className={`outline-none ${(nameError && "border-red-500 border") || (emailError && "border-red-500 border") || (phoneError && "border-red-500 border")} border-gray-400 border focus:border-[#473dff] focus:border lg:max-w-[80%] lg:min-w-[80%] rounded-md pl-2 py-1 my-2`}
          placeholder={placeholder}
        />
        {nameError && (
          <span className='absolute right-0 lg:right-[20%] top-17 text-[#ed3548] text-xs font-semibold'>
            this field is required
          </span>
        )}
        {emailError && (
          <span className='absolute right-0 lg:right-[20%] top-17 text-[#ed3548] text-xs font-semibold'>
            looks like this not Email Address
          </span>
        )}
        {handleError === "phoneNumber" && labelId === "phoneNumber" && (
          <span className='absolute right-0 lg:right-[20%] top-17 text-[#ed3548] text-xs font-semibold'>
            this field is required
          </span>
        )}
      </div>
    );
  }

  return (
    <>
      {/* form section */}
      <section className='col-span-3 lg:col-span-2 row-span-2 w-full px-4 py-6'>
        <form
          id='contactForm'
          action='#'
          onSubmit={handleSubmit}
          className='bg-white flex flex-col justify-self-center lg:justify-self-start rounded-lg p-6 -mt-30 lg:mt-0 mx-4 lg:mx-0 shadow-2xl lg:shadow-none'
          noValidate
        >
          <div className='mb-6'>
            <h1 className='text-2xl lg:text-3xl font-black mb-1'>
              Personal info
            </h1>
            <p className='text-[#9699ab]'>
              Please provide your name, email address, and phone number.
            </p>
          </div>
          {makeInput("Name", "personName", "text", "e.g. Stephen King")}
          {makeInput(
            "Email Address",
            "emailAddress",
            "email",
            "stephenking@lorem.com",
          )}
          {makeInput(
            "Phone Number",
            "phoneNumber",
            "tel",
            "e.g. +1 234 567 890",
          )}
        </form>
      </section>
      {!isSendingForm && (
        <section className='bg-white lg:bg-transparent place-self-end lg:justify-self-start flex justify-end items-center col-span-3 lg:col-span-2 row-span-1 px-4 py-4 max-h-20 w-full lg:w-[90%] mx-auto'>
          <button
            form='contactForm'
            className=' bg-[#02295a] text-white py-2 px-4 rounded-sm lg:rounded-lg active:bg-[#003c86]'
            type='submit'
          >
            Next Step
          </button>
        </section>
      )}
    </>
  );
}
