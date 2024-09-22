import { links } from '@/data/data';
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
                <ul className='flex justify-between space-x-12 text-sm font-semibold'>
                   {links.map((link) => (
                    <li key={link.name} >
                      <Link href={link.link} className={`hover:text-primary hover:border-b-4 hover:border-primary py-7 px-2 ${link.Highlight}`}>{link.name}</Link>
                    </li>
                   ))}
                    {/* <li className='hover:border-b-4 hover:border-primary  text-primary '>Sign Up</li> */}
                    <div className='border-l-2 border-gray-300'></div>
                    <li className=' hover:border-b-4 hover:border-primary px-3'>Login</li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
