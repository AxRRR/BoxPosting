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
    <div className={classes.Banner_Backdrop}></div>
        <h3 className={classes.Banner_Titulo}>El Redmi Note 10 5G es el único móvil de la mítica familia de Xiaomi que tiene conectividad 5G.</h3>
        <img src='https://miro.medium.com/max/700/1*HZFTnCQNJBfGBdKcywcKXw.jpeg' 
        alt='BannerPrueba' className={classes.Banner_Imagen} />
        
    </div>
</div>
}

export default HomeBanner