import React from 'react'
import Image from 'next/image'

const Plantpot = () => {
  return (
    <div>
        {/* left side */}
      <div className='md:w-[1358px] md:h-[603px] w-[390px] h-[828px] md:flex grid grid-col'>
        <div className='md:w-[536px] md:h-[227px] md:ml-[84px] ml-[30px] mt-[72px] flex flex-col gap-4'>
          <h1 className='w-[274px] h-[84px] md:w-[536px] md:h-[227px] font-[Clash Display] text-[20px] md:text-[24px] text-[#2A254B] md:pl-[5px]'>From a studio in London to a global brand with
          over 400 outlets</h1>
          <p className=' text-[#505977] font-[Satoshi] pl-1'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
         
          <p className=' text-[#505977] font-[Satoshi] text-[16px] pl-1'>Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        <div/>
        <button className='md:w-[156px] md:h-[56px] w-[342px] h-[56px] md:mt-[200px] md:ml-[1px]  px-[30px] py-[18px] bg-[#F9F9F9] text-[#2A254B] font-[Satoshi] text-[16px]'>
          Get in touch
        </button>
        </div>

        {/* right side */}
       <div>
       <Image
       src={'/plant.png'}
       alt='plantpot'
       width={720}
       height={603}
       className='md:ml-[70px] ml-[10px]'
       />
       </div>
        

    </div>
  </div>
  )
}

export default Plantpot
