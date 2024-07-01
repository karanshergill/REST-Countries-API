import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div.attrs({
    className: 'flex flex-col shadow-md rounded-b-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer hover:shadow-lg'
})``;

const CardImage = styled.img.attrs({
    className: 'w-full h-40 object-cover rounded-t-lg border-b-2'
})``;

const CardContent = styled.div.attrs({
    className: 'flex flex-col gap-1 p-6 mt-2 mb-4 h-44'
})``;

const CardTitle = styled.h2.attrs({
    className: 'text-lg font-bold mb-2'
})``;

const CardTextField = styled.p.attrs({
    className: 'text-sm font-medium'
})``;

export const Card = ({ name, population, region, capital, flag }) => {
    return (
        <a href="#">
            <CardContainer>
                <CardImage src={ flag } alt={`${name} Flag`} />
                <CardContent>
                    <CardTitle>{name}</CardTitle>
                    <CardTextField><span className='text-sm font-bold'>Population: </span>{population.toLocaleString('en-IN')}</CardTextField>
                    <CardTextField><span className='text-sm font-bold'>Region: </span>{region}</CardTextField>
                    <CardTextField><span className='text-sm font-bold'>Capital: </span>{capital || 'N/A'}</CardTextField>
                </CardContent>
            </CardContainer>
        </a>
    )
}
