import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import { FaCaretDown } from "react-icons/fa";

const page = () => {
  return (
    <section>
      <Header />
      <div className='w-[390px] md:w-[1358px] md:h-[209]'>
        <Image
          src={'/productpage.png'}
          alt='product page'
          width={1358}
          height={209} />
      </div>

      <div className='w-[1358px] h-[64px] flex md:hidden'>
        <div className='w-[557px] h-[48px] flex gqp-[15px] ml-[40px] mt-[7px]'>
          <button className='w-[137px] h-[48px] flex pt-[10px] pl-[20px] ml-[10px] box-border bg-[#F7F7F7F7]'>Filters
            <FaCaretDown size={17} className='mt-[5px] ml-[20px]' />
          </button>

          <button className='w-[137px] h-[48px] flex pt-[10px] pl-[20px] ml-[10px] box-border bg-[#F7F7F7F7]'>Sortings
            <FaCaretDown size={17} className='mt-[5px] ml-[20px]' />
          </button>
        </div>
      </div>


      <div className='w-[1358px] h-[64px] md:flex hidden'>
        <div className='w-[557px] h-[48px] flex gqp-[12px] ml-[10px] mt-[7px]'>
          <button className='w-[137px] h-[48px] flex pt-[10px] pl-[20px] ml-[10px]'>Category
            <FaCaretDown size={17} className='mt-[5px] ml-[20px]' />
          </button>

          <button className='w-[162px] h-[48px] flex pt-[10px] pl-[30px] ml-[10px]'>Products
            <FaCaretDown size={17} className='mt-[5px] ml-[20px]' />
          </button>

          <button className='w-[108px] h-[48px] flex pt-[10px] pl-[10px] ml-[10px]'>Prices
            <FaCaretDown size={17} className='mt-[5px]' />
          </button>

          <button className='w-[114px] h-[48px] flex pt-[10px] pl-[10px] ml-[10px]'>Brands
            <FaCaretDown size={17} className='mt-[5px] ml-[20px]' />
          </button>
        </div>

        <div className='w-[557px] h-[48px] flex gqp-[10px] ml-[450px] mt-[7px] '>
          <p className='w-[137px] h-[48px] flex pt-[10px] pl-[20px] ml-[10px]'>Sorting by:</p>

          <button className='w-[137px] h-[48px] flex pt-[10px] pl-[20px] ml-[10px]'>Date Code
            <FaCaretDown size={17} className='mt-[5px] ml-[20px]' />
          </button>
        </div>

      </div>


      {/* line 1 */}

      <div className="md:w-[1350px] md:h-[470px] w-[390px] h-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:mt-[20px] mt-[50px] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/chair.png'}
              alt="chair"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Dandy Chair</h1>
            <p className="text-[18px] font-[Satoshi]">£250</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/mitti.png'}
              alt="vase"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">Rustic Vase Set</h1>
            <p className="text-[18px] font-[Satoshi]">£155</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/vase.png'}
              alt="vase"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Silky Vase</h1>
            <p className="text-[18px] font-[Satoshi]">£125</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/lamp.png'}
              alt="lamp"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Luckt Lamp</h1>
            <p className="text-[18px] font-[Satoshi]">£399</p>
          </div>
        </div>
      </div>

      {/* line 2 */}

      <div className="md:w-[1350px] md:h-[470px] w-[390px] h-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:mt-[20px] mt-[50px] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/blackchair.png'}
              alt="chair"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Dandy Chair</h1>
            <p className="text-[18px] font-[Satoshi]">£250</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/yellowlamp.png'}
              alt="vase"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">Rustic Vase Set</h1>
            <p className="text-[18px] font-[Satoshi]">£155</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/whitepot.png'}
              alt="vase"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Silky Vase</h1>
            <p className="text-[18px] font-[Satoshi]">£125</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/multichair.png'}
              alt="lamp"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Luckt Lamp</h1>
            <p className="text-[18px] font-[Satoshi]">£399</p>
          </div>
        </div>
      </div>


      {/* line 3 */}








      <div className="md:w-[1350px] md:h-[470px] w-[390px] h-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:mt-[20px] mt-[50px] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/chair.png'}
              alt="chair"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Dandy Chair</h1>
            <p className="text-[18px] font-[Satoshi]">£250</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/mitti.png'}
              alt="vase"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">Rustic Vase Set</h1>
            <p className="text-[18px] font-[Satoshi]">£155</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/vase.png'}
              alt="vase"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Silky Vase</h1>
            <p className="text-[18px] font-[Satoshi]">£125</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px]">
            <Image
              src={'/lamp.png'}
              alt="lamp"
              width={305}
              height={375}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[154px] h-[63px] text-center mt-4">
            <h1 className="text-[20px] font-[Clash Display]">The Luckt Lamp</h1>
            <p className="text-[18px] font-[Satoshi]">£399</p>
          </div>
        </div>
      </div>


      <button className='w-[170px] h-[56px] mt-[30px] ml-[570px] mb-7 px-[28px] py-[16px] bg-[#F9F9F9]'>
        View Collection
      </button>

      <Footer />
    </section>

  )
}

export default page
