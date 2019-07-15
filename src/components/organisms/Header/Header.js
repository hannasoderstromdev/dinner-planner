import React from 'react'

import logoImg from './logo.svg'

const Header = () => (
  <header data-testid="main-header">
    <img alt="movie ratings" data-testid="logo" src={logoImg} />
  </header>
)

export default Header
