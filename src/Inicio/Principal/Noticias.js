import classes from './Noticias.module.css'
import React from 'react'
import TopNoticias from '../TopNoticias/TopNoticias'

const Noticias = () => {
const [noticia, setNoticia] = React.useState([])

  React.useEffect(() => {
    ConsultarDatos()
  }, [])

  const ConsultarDatos = async () => {
    const url = await fetch('http://localhost:8080/api/tecnologias')
    const tnoticia = await url.json()
    setNoticia(tnoticia)
    console.log(tnoticia)
  }

  var RenderNews = noticia.slice(0, 5)

    return <div>
        <div className={classes.Noticias_BOX}>

        <h2 className={classes.Noticias_Titulo}>Última noticias:</h2>
            <ul className={classes.Noticias_BOXStyle}>
                <div>
                {RenderNews.map((news) => (
                <li 
                key={news.id_noticia}
                className={classes.Noticias_Caja}> 
                    <img src={news.imagen_noticia}
                    alt={news.imagen_noticia} className={classes.Noticias_BOXImg} />
                    <h4 className={classes.Noticias_BOXTitulo}>{news.titulo_noticia}</h4>
                    <p className={classes.Noticias_BOXParrafo}>{news.texto_noticia}</p>
                    </li>
                    ))}
                </div>
            </ul>
        </div>
    </div>
}

export default Noticias