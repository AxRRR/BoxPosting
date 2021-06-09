import classes from './TopNoticias.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TopNoticias = (props) => {
    const NoticiaHandler = (id) => {
        props.onNoticiaHandler(id)
        console.log(id)
    }
    return <div>
        <ul className={classes.TOP_List}>
            <h2 className={classes.TOP_Titulo}>Lo más visto:</h2>
            <li className={classes.TOP_Box}>
            <Link to={"/ver/" + 1}><img src='https://www.eltiempo.com/files/article_main/uploads/2020/03/06/5e62c1d3f0d07.jpeg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} 
                onClick={() => NoticiaHandler('1')} />
                </Link>
                <p className={classes.TOP_Parrafo}>Festival Xbox Game Pass traerá algunas sorpresas sobre videojuegos</p>
            </li>
            <li className={classes.TOP_Box}>
                <img src='https://phantom-marca.unidadeditorial.es/67f2185c5fb70998b7d6f40f8b830ea8/resize/660/f/webp/assets/multimedia/imagenes/2021/06/01/16225681874758.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>Una compañía ofrece pagar $40,000 por jugar videojuegos</p>
            </li>
            <li className={classes.TOP_Box}>
                <img src='https://www.tonica.la/__export/1602525585446/sites/debate/img/2020/10/12/one-piece-se-estrena-en-netflix.jpg_423682103.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>One piece: Lista de capitulos canon. ¡Evita ver relleno! Lista actualizable 2021</p>
            </li>
            <li className={classes.TOP_Box}>
                <img src='https://depor.com/resizer/hEvjHeXUf_IuqPyyUP39Yr3Xhhk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PPNQFI3EONGYTKKHBD4K42RYZE.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>Dragon Ball Super: así se vería la pelea de Goku contra Granola en el anime</p>
            </li>

        </ul>
    </div>
}

export default TopNoticias