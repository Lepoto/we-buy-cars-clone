import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faGlobeAfrica, faBell, faStar, faSearch  } from '@fortawesome/free-solid-svg-icons';


const Filters = () => {
  return (
    <div className='mx-12 rounded-bl-2xl rounded-br-2xl bg-wbCars_lighter'>
      {/* Buttons for Filter */}
      <div className='flex space-x-1 px-3 py-2'>
        <button type='button' className='flex justify-center items-center space-x-2  text-sm bg-fade font-semibold h-11  w-96 text-center rounded-t-2xl border-b-6 border-b-primary  hover:border-b-primary'>
          <FontAwesomeIcon icon={faGlobeAfrica} className="w-4 h-4" />
          <span>All</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2 btn  text-sm shadow-md bg-white font-semibold h-11  w-96 text-center rounded-t-2xl  hover:border-b-4 hover:border-b-primary'>
          <FontAwesomeIcon icon={faHammer} className='w-4 h-4 text-primary'/>
          <span>Auctions</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2  text-sm bg-white shadow-md font-semibold h-11  w-96 text-center rounded-t-2xl  hover:border-b-4 hover:border-b-primary'>
          <FontAwesomeIcon icon={faStar} className='w-4 h-4 text-primary'/>
          <span>Special Offers</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2  text-sm bg-white shadow-md font-semibold h-11  w-96 text-center rounded-t-2xl  hover:border-b-4 hover:border-b-primary'>
          <FontAwesomeIcon icon={faBell} className='w-4 h-4 text-primary'/>
          <span>Stock Alerts</span>
        </button>
      </div>
      {/* Categories */}
      <div className='flex space-x-2 px-6'>
        <button type='button' className='flex justify-center items-center space-x-2 text-white text-sm bg-wbCars font-semibold h-10  w-96 rounded-xl'>
          <Image src="https://webuycarscms.blob.core.windows.net/cmsmedia/assets/vehicle_icon_v2_30d7842e6c.svg?904468.9000000358" width={33} alt='' height={20}/>
          <span className='font-semibold'>Vehicle (8350)</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2 text-white text-sm bg-wbCars font-semibold h-10  w-96 rounded-xl'>
          <Image src="https://webuycarscms.blob.core.windows.net/cmsmedia/assets/bakkie_icon_v2_da72309f57.svg?904467.9000000358" width={33} alt='' height={20}/>
          <span className='font-semibold'>Bakkie (1407)</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2 text-white text-sm bg-wbCars font-semibold h-10  w-96 rounded-xl'>
          <Image src="https://webuycarscms.blob.core.windows.net/cmsmedia/assets/bike_icon_v2_52fde3e46e.svg?904468.3000000119" width={33} alt='' height={20}/>
          <span className='font-semibold'>Motorbike (371)</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2 text-white text-sm bg-wbCars font-semibold h-10  w-96 rounded-xl'>
          <Image src="https://webuycarscms.blob.core.windows.net/cmsmedia/assets/leisure_icon_v2_f56093a421.svg?904468.1000000238" width={33} alt='' height={20}/>
          <span className='font-semibold'>Leisure (159)</span>
        </button>
        <button type='button' className='flex justify-center items-center space-x-2 text-white text-sm bg-wbCars font-semibold h-10  w-96 rounded-xl'>
          <Image src="https://webuycarscms.blob.core.windows.net/cmsmedia/assets/commercial_icon_v2_386afb837e.svg?904468.6999999881" width={33} alt='' height={20}/>
          <span className='font-semibold'>Commercial (57)</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className='flex space-x-4 px-6 py-3'>
        <div className='relative w-full'>
          <input
            type='text'
            placeholder='Search Make, Model, Year..'
            className='w-full pl-4 pr-16 py-3 border border-gray-300 rounded-lg'
          />
          <button
            className='absolute flex items-center justify-center space-x-2 h-12 right-0 top-0 bottom-0 px-4 bg-primary text-white rounded-lg'>
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
        <button className='px-4 bg-gray-200 rounded-lg'>WHAT CAN I AFFORD?</button>
      </div>

    </div>
  )
}

export default Filters