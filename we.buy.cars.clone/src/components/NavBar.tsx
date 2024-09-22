import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white h-20 shadow-lg px-16">
      <div className=''>
        <div className='flex justify-between'>
            <Image src='/webuycars.png' alt='' width={80} height={80} />

            <div className='py-6'>
                <ul className='flex justify-between space-x-14 text-base text-nowrap font-bold'>
                    <li>Sell my car</li>
                    <li>Buy a car</li>
                    <li>Finance & Services</li>
                    <li>Our Locations</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Investors</li>
                    <li className='text-primary'>Sign Up</li>
                    <div className='text-gray-400'>|</div>
                    <li>Login</li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
