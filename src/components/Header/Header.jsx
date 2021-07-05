import React from 'react'
import './header.css'
import logo from '../../assets/images/kencoinLogo1.png'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

const Header = () => {
    return (
        <div className="headerContainer">
            <img src={logo} className="headerLogo" alt="Kencoin Logo" />
            <HeaderMenu />
        </div>
    )
}

export default Header
