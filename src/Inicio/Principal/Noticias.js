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
                    <img src='https://s1.eestatic.com/2019/07/30/omicrono/omicrono_417718748_131242545_1024x576.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>Samsung crea un parche con tecnología OLED qu...</h3>
                    <label className={classes.Noticias_BOXParrafo}>La tecnología no solo está avanzando en la habitual dirección de la evolución de los componentes electrónicos que podemos vestir o nos pueden acompañar en el entorno de nuestro hogar. Sino que cada vez es más habitual ver dispositivos que se integran perfectamente en nuestro cuerpo.</label>
                    </li>
                    </div>
                    <div>
                <li className={classes.Noticias_Caja}> 
                    <img src='https://ramenparados.com/wp-content/uploads/2020/02/libro-magico-zero-key-scaled.jpg'
                    alt='PruebaImagenBox1' className={classes.Noticias_BOXImg} />
                    <h3 className={classes.Noticias_BOXTitulo}>Lista de estrenos del mes de Julio en Netflix Anime</h3>
                    <label className={classes.Noticias_BOXParrafo}>La temporada de verano está a punto de dar su pistoletazo de salida con multitud de nuevos estrenos y nuevos proyectos que todavía desconocemos si llegarán a nuestro territorio. Tras dejar de lado la temporada primaveral, una copada de multitud de estrenos y grandes historias, ha llegado el turno de disfrutar de la brisa marina, del calor estival y de ver cuáles serán los...</label>
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