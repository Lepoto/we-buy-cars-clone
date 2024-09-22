import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white h-20 shadow-lg px-16">
      <div className=''>
        <div className='flex justify-between py-1'>
            <Image src='/webuycars.png' alt='' width={75} height={75} />

            <div className='py-6'>
                <ul className='flex justify-between space-x-16 text-sm font-semibold'>
                    <li className='hover:text-primary'>Sell my car</li>
                    <li>
                      <Link href="/buy-a-car" className='hover:text-primary hover:border-b-4 hover:border-primary py-7 px-3'>Buy a car</Link>
                    </li>
                    <li className='hover:text-primary'>Finance & Services</li>
                    <li className='hover:text-primary'>Our Locations</li>
                    <li className='hover:text-primary'>About</li>
                    <li className='hover:text-primary'>Contact Us</li>
                    <li className='hover:text-primary'>Investors</li>
                    <li className='text-primary'>Sign Up</li>
                    <div className='border-l-2 border-gray-300'></div>
                    <li>Login</li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
