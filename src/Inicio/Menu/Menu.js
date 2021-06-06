import classes from './Menu.module.css'
import React from 'react'
import LogoImg from '../../assets/boxpostinglogo.png'

const Menu = () => {

    return <div>
        <ul className={classes.Navbar_MenuStyle}>
            <li className={classes.Navbar_Item}>
                <img src={LogoImg} alt={LogoImg} className={classes.Navbar_Logo} />
            </li>
            <li className={classes.Navbar_Item}>Inicio</li>
            <li className={classes.Navbar_Item}>Noticias</li>
            <li className={classes.Navbar_Item}>Perfil</li>
        </ul>
    </div>
}

export default Menu