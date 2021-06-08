import classes from './Noticias.module.css'
import React from 'react'
import TopNoticias from '../TopNoticias/TopNoticias'

const Noticias = () => {
    return <div>
        <div className={classes.Noticias_BOX}>
            <TopNoticias />
        <h2 className={classes.Noticias_Titulo}>Última noticias:</h2>
            <ul className={classes.Noticias_BOXStyle}>
            <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/04/Controles-Xbox-Series-790x415.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>GTA 6: Podria salir en el Enero del 2021 aseguran...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La presentación del nuevo videojuego de Rockstar podria oficializarse en el E3 en el invierno del 2021</label>
                    </li>
                    </div>
                    <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/04/Controles-Xbox-Series-790x415.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>GTA 6: Podria salir en el Enero del 2021 aseguran...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La presentación del nuevo videojuego de Rockstar podria oficializarse en el E3 en el invierno del 2021</label>
                    </li>
                    </div>
                    <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/04/Controles-Xbox-Series-790x415.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>GTA 6: Podria salir en el Enero del 2021 aseguran...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La presentación del nuevo videojuego de Rockstar podria oficializarse en el E3 en el invierno del 2021</label>
                    </li>
                    </div>
                    

            </ul>
            <h2 className={classes.Noticias_Titulo}>Videojuegos:</h2>
            <ul className={classes.Noticias_BOXStyle}>
            <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/04/Controles-Xbox-Series-790x415.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>GTA 6: Podria salir en el Enero del 2021 aseguran...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La presentación del nuevo videojuego de Rockstar podria oficializarse en el E3 en el invierno del 2021</label>
                    </li>
                    </div>
                    <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/04/Controles-Xbox-Series-790x415.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>GTA 6: Podria salir en el Enero del 2021 aseguran...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La presentación del nuevo videojuego de Rockstar podria oficializarse en el E3 en el invierno del 2021</label>
                    </li>
                    </div>
                    <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://www.somosxbox.com/wp-content/uploads/2021/04/Controles-Xbox-Series-790x415.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>GTA 6: Podria salir en el Enero del 2021 aseguran...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La presentación del nuevo videojuego de Rockstar podria oficializarse en el E3 en el invierno del 2021</label>
                    </li>
                    </div>
                    

            </ul>
        </div>
    </div>
}

export default Noticias