import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowDownWideShort  } from '@fortawesome/free-solid-svg-icons';

const ShowRoom = () => {
  return (
    <div className='px-16'>
      {/* Filter and Sorting */}
      <div className='flex justify-between px-9 py-5'>
        <div>
          <button className='flex items-center space-x-2 border border-gray-800 p-3 rounded-lg  text-gray-700 hover:text-gray-900'>
            <span className='text-nowrap text-sm font-semibold'>FILTER MY SEARCH</span>
            <FontAwesomeIcon icon={faFilter} className="w-4 h-4" />
          </button>
        </div>

        <div>
          <ul className='flex justify-center space-x-2 font-bold text-base'>
            <li className='text-primary'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <p className='text-extra-small'>( Showing 1 - 23 of 10496 )</p>
        </div>

        <div>
          <button className='flex items-center space-x-2 border border-gray-800 p-3 rounded-xl text-gray-700 hover:text-gray-900'>
            <span className='text-nowrap text-sm font-semibold'>SORT</span>
            <FontAwesomeIcon icon={faArrowDownWideShort} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
