export default function SuccessMassage() {

  return (
    <>
      <section className='bg-white justify-self-center col-span-3 lg:col-span-2 lg:row-span-3 py-8 mx-4 rounded-lg mb-3 -m-40 lg:m-0 shadow-2xl lg:shadow-none h-fit lg:h-full'>

        <div className='flex flex-col justify-center items-center gap-y-4 px-10 py-16
         lg:px-20 '>
          <span className='bg-rose-400 p-4 rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 12 9'
              className='bg-white stroke-2 stroke-rose-400 w-10 h-10 rounded-full p-2 shadow-[12px_11px_0px_0px] shadow-rose-600/40'
            >
              <path fill='none' d='m1 4 3.433 3.433L10.866 1' />
            </svg>
          </span>
          <h1 className='text-xl lg:text-3xl font-black mt-2'>Thank you!</h1>
          <p className='text-center lg:text-2xl text-[#9699ab]'>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </section>
    </>
  );
}
