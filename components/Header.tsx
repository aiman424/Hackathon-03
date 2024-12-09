import React from 'react'
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";


const Header = () => {
  return (
    <div>
      {/* top header */}
      <div className='md:w-[1358px] w-[420px] md:h-[132px]'>
        <div className="flex items-center justify-between w-full md:w-[1358px] h-[50px] px-4 md:px-0">
          {/* Search Icon (Left on larger screens) */}
          <div className="flex items-center ml-[330px] lg:ml-0 w-6 lg:w-auto">
            <IoIosSearch size={30} className="text-gray-700" />
          </div>

          {/* Logo (Centered on md+ screens) */}
          <p className="text-[24px] font-[Clash Display] text-center absolute md:static md:mx-auto md:left-1/2 md:transform md:-translate-x-1/2">
            Avion
          </p>

          {/* Icons (Right on larger screens) */}
          <div className="flex gap-4 items-center">
            {/* Hamburger Menu (Small screens) */}
            <IoIosMenu size={25} className="text-gray-700 md:hidden" />

            {/* Cart and User Icons (Medium+ screens) */}
            <div className="hidden md:flex gap-4">
              <Link href="/shopping-cart" target="_blank">
                <IoCartOutline size={30} className="text-gray-700" />
              </Link>
              <FaRegCircleUser size={27} className="text-gray-700" />
            </div>
          </div>
        </div>


        <Image
          src={'/Divider.png'}
          alt='divider'
          width={1358}
          height={2}
          className='hidden md:block'
        />

        {/* links */}
        <div className='w-[675px] h-[22px] ml-[370px] hidden md:block mt-[20px]'>
          <ul className='flex gap-[44px] font-[Satoshi] text-[16px]'>
            <Link href={'/'}><li>Plant pots</li></Link>
            <Link href={'/Ceramics'}><li>Ceramics</li></Link>
            <Link href={'/'}><li>Tables</li></Link>
            <Link href={'/'}><li>Chairs</li></Link>
            <Link href={'/'}><li>Crockery</li></Link>
            <Link href={'/'}><li>Tableware</li></Link>
            <Link href={'/'}><li>Cutlery</li></Link>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Header


