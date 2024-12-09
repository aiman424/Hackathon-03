import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  return (
    <div className='md:w-[1358px] md:h-[744px]  md:mt-0 mt-[100px]'>
      <div className='w-[330px] h-[45px] ml-[80px] pt-20'>
        <h1 className='text-[32px] font-[Clash Display]'>Our Popular Product</h1>
      </div>

      <div className='md:w-[1358px] md:h-[470px] w-[390px] h-[430px] md:flex grid grid-cols-2 gap-[3px] mt-[70px]'>
          <div className='w-[630px] h-[462px] ml-[35px] hidden md:block'>
            <div>
            <Image
            src={'/sofa.png'}
            alt='sofa'
            width={630}
            height={375}
            />
            </div>

         <div className='w-[215px] h-[63px] pl-[5px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>The Popular suede sofa</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£980</p>
           </div>
          </div>


          {/* card 2 */}
          <div className='w-[305px] h-[462px] md:ml-[20px] ml-[6px]'>
            <div className='md:w-[305px] md:h-[375px] w-[200px] h-[251px]'>
              <Image
              src={'/chair.png'}
              alt='chair'
              width={305}
              height={375}
              />
            </div>

           <div className='md:w-[154px] w-[145px] h-[63px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>The Dandy chair</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£250</p>
           </div>
          </div>


          {/* card 3 */}
          <div className='w-[305px] h-[462px] ml-[20px]'>
            <div className='md:w-[305px] md:h-[375px] w-[200px] h-[251px]'>
              <Image
              src={'/blackchair.png'}
              alt='chair'
              width={305}
              height={375}
              />
            </div>

           <div className='w-[154px] h-[63px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>The Dandy chair</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£250</p>
           </div>
          </div>
      </div>

     
      <Link href={'/product-listing'} target='_blank'>
      <button className='md:w-[170px] w-[342px] h-[56px] md:mt-[30px] md:ml-[580px] ml-[40px] px-[28px] py-[16px] bg-[#F9F9F9]'>
      View Collection
     </button>
     </Link>



    </div>
  )
}

export default Product
