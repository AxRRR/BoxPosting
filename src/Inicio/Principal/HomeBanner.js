import classes from './HomeBanner.module.css'
import React from 'react'

const HomeBanner = () => {
const [noticiatop3, setNoticiaTop3] = React.useState([])

React.useEffect(() => {
    ConsultarNoticiasTop3()
}, [])
    
const ConsultarNoticiasTop3 = async () => {
    const url = await fetch('http://localhost:8080/api/top3noticias')
    const tnoticia = await url.json()
    setNoticiaTop3(tnoticia)
    console.log(tnoticia)
    console.log(noticiatop3)
}

var RenderNewsTop3 = noticiatop3.slice(0, 1)

return <div>
<div className={classes.Banner_Body}>
    <ul>
        <li className={classes.Banner_ListStyle}>
            <div className={classes.Banner_Backdrop}></div>
            <h1 className={classes.Banner_TAG1}>Tecnologia</h1>
            <h3 className={classes.Banner_Titulo}>El Redmi Note 10 5G es el único móvil de la mítica familia de Xiaomi que tiene conectividad 5G.</h3>
        <img src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/redmi-note-10-5g-analisis-opinion-2360679.jpg?itok=Gm9VWDsO' 
        alt='BannerPrueba' className={classes.Banner_Imagen} />
        </li>
        <li className={classes.Banner_ListStyle}>
        <div className={classes.Banner_Backdrop_Second}></div>
        <h1 className={classes.Banner_TAG2}>Anime</h1>
            <h3 className={classes.Banner_Titulo_Second}>¿Luffy, Zoro o Nami? quién es el personaje de One Piece más querido</h3>
            <img src='https://pulpfictioncine.com/download/multimedia.normal.8600aabc25e810d3.4f6e652050696563652057616e6f204f70656e696e6720325f6e6f726d616c2e6a706567.jpeg'
            alt='BannerPrueba2' className={classes.Banner_NoticiasSmall1} />
        </li>
        <li className={classes.Banner_ListStyle}>  
        <div className={classes.Banner_Backdrop_Third}></div>
        <h1 className={classes.Banner_TAG3}>Videojuegos</h1>
            <h3 className={classes.Banner_Titulo_Third}>Game Builder Garage: ahora Nintendo quiere que hagas tú los videojuegos</h3>
            <img src='https://phantom-elmundo.unidadeditorial.es/2016306c73cd075fc50f5d198ac8e241/resize/473/f/webp/assets/multimedia/imagenes/2021/05/27/16221124040284.jpg'
            alt='ImagenPrueba3' className={classes.Banner_NoticiasSmall2} />
        </li>
    </ul>
</div>
</div>
}

export default HomeBanner