import React from 'react'
import Image from 'next/image';
import { IoIosMenu } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";


const ProductDeatil = () => {
  return (
    <div>
      {/* top header */}
      <header className='md:w-[1358px] w-[400px] h-[54px] flex md:h-[41px] bg-[#2A254B]'>
         <div className='flex md:justify-center md:items-center gap-1 md:pl-[400px]'>
        <TbTruckDelivery size={20} className='md:ml-[80px] mt-[15px] md:mt-0' />
        <p className='text-white'> 
        Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        </header>

        {/* Main header */}
        <nav className='w-[1358px] h-[134px]'>
            <div className='w-[1358px] h-[70px] pl-[10px] pt-[20px] flex '>
             <h1 className='text-[24px]'>Avion</h1>

             <div>
             <ul className='w-[215px] h-[22px] ml-[950px] mt-[8px] md:flex justify-end gap-4 items-end hidden '>
                <li>About us</li>
                <li>Contact</li>
                <li>Blog</li>
             </ul>
             </div>

            <div className='w-[80px] h-[18px] flex md:ml-[30px] mt-[9px] gap-3'>
            <IoIosSearch size={20} className='md:block hidden'/>
            <IoCartOutline size={20} className='md:block hidden'/>
            <FaRegCircleUser size={20} className='md:block hidden'/>
            <IoIosMenu size={26} className='md:hidden ml-[80px]'/>
            </div>
         </div>
        
         <div className='w-[1358px] h-[64px] hidden md:block bg-[#F9F9F9]'>
         <div className='w-[675px] h-[22px] ml-[370px]'>
          <ul className='md:flex gap-[44px] font-[Satoshi] pt-[20px] text-[#726E8D] text-[16px] hidden'>
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
           <li>Cutlery</li>
          </ul>
        </div>
         </div>
    </nav>

    <section>
        <div className='w-[1358px] h-[759px] flex flex-col md:flex-row gap-[5px]'>
        <div className='md:w-[721px] md:h-[720px] w-[390px] h-[380px]'>
            <Image
            src={'/productchair.png'}
            alt='product chair'
            width={721}
            height={720}
            />
        </div>

        <div className='w-[617px] h-[760px] bg-[#F9F9F9]'>
         <div className='w-[602px] flex flex-col h-[657px]'>
         <h1 className='text-[36px] font-[Clash Display] text-[#2A254B] md:pl-[80px] pl-[30px] pt-[50px]'>The Dandy Chair</h1>
         <p className='text-[27px] font-[Clash Display] text-[#2A254B] md:pl-[80px] p-[30px] pt-[20px]'>£250</p>
        

         <div className='w-[602px] h-[251px]'>
            <h1 className='text-[#2A254B] text-[16px] md:pl-[80px] pl-[30px] pt-[10px]'>Description</h1>
            <p className='text-[#505977] text-[16px] font-[Satoshi] md:pl-[80px] pl-[30px] pt-[10px]'>A timeless design, with premium materials features as one of our most popular and iconic pieces.
             The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
             <ul className='text-[#505977] text-[16px] font-[Satoshi] md:pl-[80px] pl-[30px] pt-[10px]'>
                <li>• Premium material</li>
                <li>• Handmade upholstery</li>
                <li>• Quality timeless classic</li>
             </ul>
         </div>


         <div className='w-[602px] h-[134px]'>
          <h1 className='text-[#2A254B] text-[16px] md:pl-[80px] pl-[30px] pt-[10px]'>Dimensions</h1>
          <div className='flex '>
          <p className='md:pl-[80px] pl-[30px] pt-[20px]'>Height</p>
          <p className='md:pl-[60px] pl-[30px] pt-[20px]'>Width</p>
          <p className='md:pl-[60px] pl-[30px] pt-[20px]'>Depth</p>
          </div>

          <div className='flex'>
          <p className='md:pl-[80px] pl-[30px] pt-[20px]'>110cm</p>
          <p className='md:pl-[65px] pl-[30px] pt-[20px]'>75cm</p>
          <p className='md:pl-[65px] pl-[30px] pt-[20px]'>50cm</p>
          </div>
         </div>
         

         <div className='w-[602px] h-[115px] mt-[20px]'>
         <div className='md:flex flex flex-col md:flex-row'>
         <p className='text-[#2A254B] text-[16px] md:pl-[80px] pl-[30px] pt-[10px]'>Amount:</p>
         <p className='box-border w-[112px] h-[46px] ml-[20px] text-center pt-[10px] bg-white'>
          1 </p>

         <div className='flex-col gap-[20px] bg-[#F9F9F9]'>
         <button className='md:w-[170px] w-[342px] h-[56px] md:ml-[100px] ml-[40px] mt-[10px] md:mt-0 px-[28px] text-[#2A254B] bg-white md:hidden'>
         Save to favourites
          </button>
          <button className='md:w-[170px] w-[342px] h-[56px] md:ml-[100px] ml-[40px] mt-[10px] px-[28px] text-white py-[16px] bg-[#2A254B]'>
         Add to cart
          </button>
          </div>

         </div>
         </div>

         </div>
        </div>
    </div>
    






    </section>













    </div> 
  )
}

export default ProductDeatil
