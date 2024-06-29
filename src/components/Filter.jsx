import React from 'react'
import styled from 'styled-components'

const SelectDropdown = styled.select.attrs({
    className: 'shadow-md rounded-md p-2 text-sm bg-transparent'
})``;

const SelectOption = styled.option.attrs({
    className: 'bg-transparent text-sm hover:text-gray-600'
})``;

export const Filter = () => {
    return (
        <SelectDropdown>
            <SelectOption hidden=''>Filter by Region</SelectOption>
            <SelectOption value="Africa">Africa</SelectOption>
            <SelectOption value="America">America</SelectOption>
            <SelectOption value="Asia">Asia</SelectOption>
            <SelectOption value="Europe">Europe</SelectOption>
            <SelectOption value="Oceania">Oceania</SelectOption>
      </SelectDropdown>
  )
}
