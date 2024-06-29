import React from 'react'

export const Card = ({ name, population, region, capital, flag }) => {
    return (
        <a href="#">
            <div className='flex flex-col shadow-md rounded-b-lg overflow-hidden hover:scale-105 hover:ease-in-out hover:duration-200 hover:shadow-lg hover:cursor-pointer'>
                <img className='w-full h-40 object-cover rounded-t-lg' src={flag} alt={`${name} Flag`} />
                <div className='flex flex-col gap-1 p-6 mt-2 mb-4 h-40'>
                    <h2 className='text-lg font-bold mb-2'>{name}</h2>
                    <p className='text-sm font-medium'><span className='text-sm font-bold'>Population: </span>{population.toLocaleString('en-IN')}</p>
                    <p className='text-sm font-medium'><span className='text-sm font-bold'>Region: </span>{region}</p>
                    <p className='text-sm font-medium'><span className='text-sm font-bold'>Capital: </span>{capital || 'N/A'}</p>
                </div>
            </div>
        </a>
    )
}
