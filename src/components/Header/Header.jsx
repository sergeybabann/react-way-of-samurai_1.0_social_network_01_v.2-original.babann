import React from 'react'
import s from './Header.module.css'
import logo from '../../icons/logo.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} width='55px' height='55px' alt='' />
    </header>
  )
}

export default Header
