import classes from './HomeBanner.module.css'
import React from 'react'

const HomeBanner = () => {

    return <div>
        <div className={classes.Banner_Body}>
            <ul>
                <li className={classes.Banner_ListStyle}>
                    <div className={classes.Banner_Backdrop}></div>
                    <h1 className={classes.Banner_TAG1}>Deportes</h1>
                    <h3 className={classes.Banner_Titulo}>¡Por fin Cruz Azul se corona Rey de la Liga Mexicana de fútbol tras 23 años de no coronarse en el campeonato ligero!</h3>
                <img src='https://phantom-marca.unidadeditorial.es/a06edc15a885ee473b2f288147ee88dc/resize/1980/f/jpg/assets/multimedia/imagenes/2021/05/31/16224329675106.jpg' 
                alt='BannerPrueba' className={classes.Banner_Imagen} />
                </li>
                <li className={classes.Banner_ListStyle}>
                <div className={classes.Banner_Backdrop_Second}></div>
                <h1 className={classes.Banner_TAG2}>Anime</h1>
                    <h3 className={classes.Banner_Titulo_Second}>¡One Piece: Episiodio 978 adelanto del capitulo!</h3>
                    <img src='https://pbs.twimg.com/media/Eo2uUViXUAMSf7k.jpg'
                    alt='BannerPrueba2' className={classes.Banner_NoticiasSmall1} />
                </li>
                <li className={classes.Banner_ListStyle}>  
                <div className={classes.Banner_Backdrop_Third}></div>
                <h1 className={classes.Banner_TAG3}>Videojuegos</h1>
                    <h3 className={classes.Banner_Titulo_Third}>Esta sería la fecha de presentación de GTA 6, según rumores</h3>
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/03/XboxSeriesX-S.jpg'
                    alt='ImagenPrueba3' className={classes.Banner_NoticiasSmall2} />
                </li>
            </ul>
        </div>
    </div>
}

export default HomeBanner