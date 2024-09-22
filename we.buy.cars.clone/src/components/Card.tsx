import React from 'react';
import Image from 'next/image';
import { faHeart, faChevronLeft, faChevronRight, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Card = () => {
  return (
    <Link href="/" className='hover:w-85'>
    <div className='bg-white shadow-lg rounded-lg w-80'> {/* Fixed width */}
        <div className="relative">
                    {/* Image */}
            <Image src='/atos.jpg' alt='car' width={350} height={200} className="rounded-t-lg" />

                    {/* Heart Icon */}
            <div className="absolute top-2 right-2">
                <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
            </div>

                    {/* Chevron Icons */}
                    <div className="absolute inset-y-0 left-2 flex items-center">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-red-600 text-2xl" />
                    </div>
                    <div className="absolute inset-y-0 right-2 flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 text-2xl" />
                    </div>
                </div>

                {/* Car Information */}
                <div className='p-4'>
                    <h3 className='text-lg font-semibold pb-2'>2021 Hyundai Atos 1.1 Motion</h3>
                    <ul className='flex space-x-3 text-sm my-5'>
                        <li className='flex items-center space-x-2 bg-second rounded-2xl p-1'>12 000 KM</li>
                        <li className='flex items-center space-x-2 bg-second rounded-2xl p-1'>
                            <span className='font-bold'>A</span>
                            <p>Rated</p>
                        </li>
                        <li className='flex items-center space-x-2 bg-second rounded-2xl p-1'>
                            <FontAwesomeIcon icon={faMapMarker} className="w-2 h-2" />
                            <p>East London</p>
                        </li>
                    </ul>

                    {/* Border */}
                    <div className='border-b-2 border-gray-100 my-2'></div>

                    {/* Price and Finance */}
                    <div className='flex justify-between items-center'>
                    <h1 className='text-primary font-bold text-2xl'>R 120 500</h1>
                    <div className='text-right'>
                        <p className='text-xs text-gray-300'>Finance From</p>
                        <h5 className='font-medium underline'>R 2350 pm</h5>
                    </div>
                </div>
        </div>
    </div>
    </Link>
  )
}

export default Card