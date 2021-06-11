import classes from './Noticias.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Noticias = () => {
  const [noticia, setNoticia] = React.useState([])
  const [tecnologia, setTecnologia] = React.useState([])
  const [internacional, setInternacional] = React.useState([])
  const [cineyseries, setCineySeries] = React.useState([])
  const [videojuegos, setVideojuegos] = React.useState([])
  const [deportes, setDeportes] = React.useState([])
  const [anime, setAnime] = React.useState([])

  React.useEffect(() => {
    ListaOrdenada()
  }, [])

  React.useEffect(() => {
    ListaGeneroTecnologia()
  }, [])

  React.useEffect(() => {
    ListaGeneroInternacional()
  }, [])

  React.useEffect(() => {
    ListaGeneroCineySeries()
  }, [])

  React.useEffect(() => {
    ListaGeneroVideojuegos()
  }, [])

  React.useEffect(() => {
    ListaGeneroDeportes()
  }, [])

  React.useEffect(() => {
    ListaGeneroAnime()
  }, [])

  const ListaOrdenada = async () => {
    const url = await fetch('http://localhost:8080/api/ultimasnoticiasordenada')
    const tnoticia = await url.json()
    setNoticia(tnoticia)
    console.log(tnoticia)
  }

  const ListaGeneroTecnologia = async () => {
    const urlinter = await fetch(
      'http://localhost:8080/api/buscarnoticiasporgenero/1',
    )
    const noticiainter = await urlinter.json()
    setTecnologia(noticiainter)
  }

  const ListaGeneroInternacional = async () => {
    const urlinter = await fetch(
      'http://localhost:8080/api/buscarnoticiasporgenero/2',
    )
    const noticiainter = await urlinter.json()
    setInternacional(noticiainter)
  }

  const ListaGeneroCineySeries = async () => {
    const urlinter = await fetch(
      'http://localhost:8080/api/buscarnoticiasporgenero/3',
    )
    const noticiainter = await urlinter.json()
    setCineySeries(noticiainter)
  }

  const ListaGeneroVideojuegos = async () => {
    const urlinter = await fetch(
      'http://localhost:8080/api/buscarnoticiasporgenero/5',
    )
    const noticiainter = await urlinter.json()
    setVideojuegos(noticiainter)
  }

  const ListaGeneroDeportes = async () => {
    const urlinter = await fetch(
      'http://localhost:8080/api/buscarnoticiasporgenero/6',
    )
    const noticiainter = await urlinter.json()
    setDeportes(noticiainter)
  }

  const ListaGeneroAnime = async () => {
    const urlinter = await fetch(
      'http://localhost:8080/api/buscarnoticiasporgenero/7',
    )
    const noticiainter = await urlinter.json()
    setAnime(noticiainter)
  }

  var RenderNews = noticia.slice(0, 5)
  var RenderNewsTecnologia = tecnologia.slice(0, 5)
  var RenderNewsInternacional = internacional.slice(0, 5)
  var RenderNewsCineySeries = cineyseries.slice(0, 5)
  var RenderNewsVideojuegos = videojuegos.slice(0, 5)
  var RenderNewsDeportes = deportes.slice(0, 5)
  var RenderNewsAnime = anime.slice(0, 5)

  document.title = 'BoxPosting - Página principal'

  return (
    <div>
      <div className={classes.Noticias_BOX}>
        <h2 className={classes.Noticias_Titulo}>Últimas noticias:</h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNews.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <h2 className={classes.Noticias_Titulo}>
          Últimas noticias tecnologia:
        </h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNewsTecnologia.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <h2 className={classes.Noticias_Titulo}>
          Últimas noticias internacional:
        </h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNewsInternacional.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <h2 className={classes.Noticias_Titulo}>
          Últimas noticias cine y series:
        </h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNewsCineySeries.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <h2 className={classes.Noticias_Titulo}>
          Últimas noticias videojuegos:
        </h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNewsVideojuegos.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <h2 className={classes.Noticias_Titulo}>Últimas noticias deportes:</h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNewsDeportes.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
        <h2 className={classes.Noticias_Titulo}>Últimas noticias anime:</h2>
        <ul className={classes.Noticias_BOXStyle}>
          <div>
            {RenderNewsAnime.map((news) => (
              <li key={news.id_noticia} className={classes.Noticias_Caja}>
                <Link to={'/ver/noticia/' + news.id}>
                  <img
                    src={news.imagen_noticia}
                    alt={news.imagen_noticia}
                    className={classes.Noticias_BOXImg}
                  />
                </Link>
                <h4 className={classes.Noticias_BOXTitulo}>
                  {news.titulo_noticia}
                </h4>
                <p className={classes.Noticias_BOXParrafo}>
                  {news.texto_noticia}
                </p>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Noticias
