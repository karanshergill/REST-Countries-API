import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header.attrs({
  className: 'shadow-md p-4'
})``;

const HeaderBar = styled.div.attrs({
  className: 'flex justify-between max-w-7xl mx-auto'
})``;

const ButtonContainer = styled.div.attrs({
  className: 'flex items-center gap-2'
})``;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBar>
        <h2>Where in the world?</h2>
        <ButtonContainer>
          <i className="bi bi-moon"></i>
          <p>Dark Mode</p>
        </ButtonContainer>
      </HeaderBar>
    </HeaderContainer>
  )
}
