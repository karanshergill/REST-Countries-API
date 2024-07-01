import React from 'react'

export const Card = ({ name, population, region, capital, flag }) => {
    return (
        <a href="#">
            <div className='flex flex-col shadow-md rounded-b-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer hover:shadow-lg'>
                <img className='w-full h-40 object-cover rounded-t-lg border-b-2' src={flag} alt={`${name} Flag`} />
                <div className='flex flex-col gap-1 p-6 mt-2 mb-4 h-44'>
                    <h2 className='text-lg font-bold mb-2'>{name}</h2>
                    <p className='text-sm font-medium'><span className='text-sm font-bold'>Population: </span>{population.toLocaleString('en-IN')}</p>
                    <p className='text-sm font-medium'><span className='text-sm font-bold'>Region: </span>{region}</p>
                    <p className='text-sm font-medium'><span className='text-sm font-bold'>Capital: </span>{capital || 'N/A'}</p>
                </div>
            </div>
        </a>
    )
}
