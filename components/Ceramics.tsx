import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Ceramics = () => {
  return (
    <div className='md:w-[1358px] md:h-[761px] w-[390px] h-[811px]'>
      <div className='[180px] h-[39px] md:ml-[80px] ml-[30px]'>
        <h1 className='pt-[80px] font-[Clash Display] text-[32px]'>New ceramics</h1>
      </div>
        
      <div className='md:w-[1350px] md:h-[470px] w-[390px] h-[811px] md:flex grid grid-cols-2 md:mt-[100px] mt-[10px]'>
          <div className='md:w-[305px] md:h-[462px] w-[163px] h-[288px] mt-[130px] md:mt-0 ml-[30px]'>
            <div className='md:w-[305px] md:h-[375px] w-[163px] h-[201px]'>
              <Link href={'/product-detail'}>
              <Image
              src={'/chair.png'}
              alt='chair'
              width={305}
              height={375}
              />
              </Link>
            </div>

           <div className='md:w-[154px] w-[145px] h-[63px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>The Dandy chair</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£250</p>
           </div>
          </div>


          {/* card 2 */}
          <div className='md:w-[305px] md:h-[462px] md:mt-0 mt-[130px] ml-[30px]'>
            <div className='md:w-[305px] md:h-[375px] w-[163px] h-[201px]'>
              <Image
              src={'/mitti.png'}
              alt='chair'
              width={305}
              height={375}
              />
            </div>

           <div className='md:w-[154px] w-[145px] h-[63px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>Rustic Vase Set</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£155</p>
           </div>
          </div>



          {/* card 3 */}
          <div className='md:w-[305px] md:h-[462px] ml-[30px]'>
            <div className='md:w-[305px] md:h-[375px] w-[163px] h-[201px]'>
              <Image
              src={'/vase.png'}
              alt='chair'
              width={305}
              height={375}
              />
            </div>

           <div className='md:w-[154px] w-[145px] h-[63px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>The Silky Vase</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£125</p>
           </div>
          </div>


          {/* card 4 */}
          <div className='md:w-[305px] md:h-[462px] ml-[30px]'>
            <div className='md:w-[305px] md:h-[375px] w-[163px] h-[201px]'>
              <Image
              src={'/lamp.png'}
              alt='chair'
              width={305}
              height={375}
              />
            </div>

           <div className='md:w-[154px] w-[145px] h-[63px]'>
            <h1 className='text-[20px] font-[Clash Display] pt-[15px]'>The Luckt Lamp</h1>
            <p className='text-[18px] font-[Satoshi] pt-[15px]'>£399</p>
           </div>
          </div>
      </div>
     
     <Link href={'/'}>
     <button className='md:w-[170px] w-[342px] h-[56px] ml-[40px] mb-[20px] md:mb-0 md:mt-[30px] md:ml-[570px] px-[28px] py-[16px] bg-[#F9F9F9]'>
      View Collection
     </button>
     </Link>


    </div>
  )
}

export default Ceramics
