import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { LuSprout } from "react-icons/lu";


const Features = () => {
  return (
    <div className='md:w-[1358px] md:h-[355px] w-[390px] h-[757px]'>
        <div className='md:w-[366px] md:h-[34px] w-[274px] h-[56px] md:ml-[510px]'>
         <p className='md:pt-[50px] md:text-center pl-[30px] md:pl-0 text-[22px] font-[Clash Display]'>What makes our brand different</p>
        </div>

        <div className='w-[1358px] h-[200px] md:flex md:flex-row flex-col mt-[70px]'>
          <div className='w-[270px] h-[124px] mt-[40px] md:ml-[86px] ml-[30px]'>
            <TbTruckDelivery size={20}/>
             <div className='w-[270px] h-[84px] mt-[10px]'>
             <h1 className='font-[Clash Display] text-[20px] leading-7'>Next Day as Standard</h1>
             <p className='font-[Satoshi] text-[18px] leading-6 pt-[7px]'>Order before 3pm and get your order
             the next day as standard</p>
            </div>
            </div>
            
            {/* 2 */}
            <div className='w-[270px] h-[124px] mt-[40px] md:ml-[30px] ml-[30px]'>
            <FaRegCircleCheck size={20}/>
             <div className='w-[270px] h-[84px] mt-[10px]'>
             <h1 className='font-[Clash Display] text-[20px] leading-7'>Made by true artisans</h1>
             <p className='font-[Satoshi] text-[18px] leading-6 pt-[7px]'>Handmade crafted goods made with
             real passion and craftmanship</p>
            </div>
            </div>

            {/* 3 */}
            <div className='w-[270px] h-[124px] mt-[40px] ml-[30px]'>
            <HiOutlineCreditCard size={20}/>
             <div className='w-[270px] h-[84px] mt-[10px]'>
             <h1 className='font-[Clash Display] text-[20px] leading-7'>Unbeatable prices</h1>
             <p className='font-[Satoshi] text-[18px] leading-6 pt-[7px]'>For our materials 
            and quality you won’t find better prices anywhere</p>
            </div>
            </div>

            {/* 4 */}
            <div className='w-[270px] h-[124px] mt-[40px] ml-[30px]'>
            <LuSprout  size={20}/>
             <div className='w-[270px] h-[84px] mt-[10px]'>
             <h1 className='font-[Clash Display] text-[20px] leading-7'>Recycled Packaging</h1>
             <p className='font-[Satoshi] text-[18px] leading-6 pt-[7px]'>We use 100% recycled packaging
             to ensure our footprint is manageable</p>
            </div>
            </div>

       

        </div>
      
    </div>
  )
}

export default Features
