import classes from './HomeBanner.module.css'
import React from 'react'

const HomeBanner = () => {

    return <div>
        <div className={classes.Banner_Body}>
            <ul>
                <li className={classes.Banner_ListStyle}>
                    <h3 className={classes.Banner_Backdrop}></h3>
                    <h3 className={classes.Banner_Titulo}>¡Por fin Cruz Azul se corona Rey de la Liga Mexicana de fútbol tras 23 años de no coronarse en el campeonato ligero!</h3>
                <img src='https://phantom-marca.unidadeditorial.es/a06edc15a885ee473b2f288147ee88dc/resize/1980/f/jpg/assets/multimedia/imagenes/2021/05/31/16224329675106.jpg' 
                alt='BannerPrueba' className={classes.Banner_Imagen} />
                </li>
                <li className={classes.Banner_ListStyle}>
                    <img src='https://pbs.twimg.com/media/Eo2uUViXUAMSf7k.jpg'
                    alt='BannerPrueba2' className={classes.Banner_NoticiasSmall1} />
                </li>
                <li className={classes.Banner_ListStyle}>  
                    <img src='https://i0.wp.com/spoilerguy.com/wp-content/uploads/2020/01/One-Piece-luffy-Zoro.jpg'
                    alt='ImagenPrueba3' className={classes.Banner_NoticiasSmall2} />
                </li>
            </ul>
        </div>
    </div>
}

export default HomeBanner