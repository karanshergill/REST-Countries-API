import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const CardTextValue = styled.span.attrs({
    className: 'text-sm font-bold'
})``;

export const Card = ({ name, population, region, capital, flag, alt }) => {
    return (
        <Link to={`/details/${encodeURIComponent(name.toLowerCase())}`}>
            <CardContainer>
                <CardImage src={flag} alt={alt} />
                <CardContent>
                    <CardTitle>{name}</CardTitle>
                    <CardTextField><CardTextValue>Population: </CardTextValue>{population.toLocaleString('en-IN')}</CardTextField>
                    <CardTextField><CardTextValue>Region: </CardTextValue>{region}</CardTextField>
                    <CardTextField><CardTextValue>Capital: </CardTextValue>{capital || 'N/A'}</CardTextField>
                </CardContent>
            </CardContainer>
        </Link>
    );
};
