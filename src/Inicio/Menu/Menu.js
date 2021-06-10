import classes from './Menu.module.css'
import React from 'react'
import LogoImg from '../../assets/boxpostinglogo.png'
import { Link } from 'react-router-dom'

const Menu = () => {

    return <div>
        <ul className={classes.Navbar_MenuStyle}>
            <img src={LogoImg} alt={LogoImg} className={classes.Navbar_Logo} />
            <Link to='/noticias'><li className={classes.Navbar_Item}>Noticias</li></Link>
            <li className={classes.Navbar_Item}>Videojuegos</li>
            <li className={classes.Navbar_Item}>Cine y Series</li>
            <li className={classes.Navbar_Item}>Anime</li>
            <li className={classes.Navbar_Item}>Tecnologia</li>
        </ul>
    </div>
}

export default Menu