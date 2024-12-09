import React from 'react'

const Email = () => {
  return (
    <div className='md:w-[1358px] md:h-[481px] w-[309px] h-[292px]'>
        <div className='h-[481px] flex justify-center md:bg-[#F9F9F9]'>
        <div className='container w-[1237px] h-[364px] mt-[40px] bg-[#FFFFFF]'>
         <div className='md:w-[571px] md:h-[114px] w-[329px] h-[86px] mt-[68px] md:ml-[330px] ml-[240px]'>
           <h1 className='md:text-[36px] text-[20px] font-[Clash Display] text-center'>Join the club and get the benefits</h1>
           <p className='md:text-[16px] text-[14px] font-[Satoshi] pt-[20px] text-center px-[10px] md:px-[70px]'>Sign up for our newsletter and receive exclusive offers on new ranges,
           sales, pop up stores and more</p>
        </div>
         
        <div className='w-[472px] flex h-[56px] md:ml-[380px] ml-[240px] mt-[60px] md:mt-[100px]'>
           <input type="email" name="email" placeholder='your@email.com'
           className='md:w-[354px] md:h-[50px] w-[224px] h-[50px] bg-[#F9F9F9] text-[#dcd6d6] pl-[25px]'/>

           <button className='w-[118px] h-[50px]  px-[30px] py-[14px] bg-[#2A254B] text-white'>Sign up</button>
           </div>

      </div>

    </div>
</div>

  )
}

export default Email
