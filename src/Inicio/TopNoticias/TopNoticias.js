import classes from './TopNoticias.module.css'
import React from 'react'

const TopNoticias = () => {
    return <div>
        <ul className={classes.TOP_List}>
            <h2 className={classes.TOP_Titulo}>Lo más visto:</h2>
            <li className={classes.TOP_Box}>
                <img src='https://img.youtube.com/vi/0tUqIHwHDEc/maxresdefault.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>Xbox Serie X Ya disponible en México apartir del Enero del 2021</p>
            </li>
            <li className={classes.TOP_Box}>
                <img src='https://img.youtube.com/vi/0tUqIHwHDEc/maxresdefault.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>Xbox Serie X Ya disponible en México apartir del Enero del 2021</p>
            </li>
            <li className={classes.TOP_Box}>
                <img src='https://www.tonica.la/__export/1602525585446/sites/debate/img/2020/10/12/one-piece-se-estrena-en-netflix.jpg_423682103.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>One piece: Lista de capitulos canon. ¡Evita ver relleno! Lista actualizable 2021</p>
            </li>
            <li className={classes.TOP_Box}>
                <img src='https://images-na.ssl-images-amazon.com/images/I/918BOOxzRyL._AC_SX425_.jpg'
                alt='TOPIMGPRUEBA' className={classes.TOP_Img} />
                <p className={classes.TOP_Parrafo}>Xbox Serie X Ya disponible en México apartir del Enero del 2021</p>
            </li>

        </ul>
    </div>
}

export default TopNoticias