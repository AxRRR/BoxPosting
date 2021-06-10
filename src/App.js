import React from 'react'
import Menu from "./Inicio/Menu/Menu";
import HomeBanner from "./Inicio/Principal/HomeBanner";
import Noticias from "./Inicio/Principal/Noticias";
import { Route } from 'react-router-dom'
import Visualizar from "./Inicio/Visualizar/Visualizar";
import TopNoticias from './Inicio/TopNoticias/TopNoticias';
import NuevaNoticia from './Inicio/NuevaNoticia/NuevaNoticia';

function App() {
  const [noticia, setNoticia] = React.useState([])

  React.useEffect(() => {
    ConsultarDatos()
  }, [])

  const ConsultarDatos = async () => {
    const url = await fetch('http://localhost:8080/api/buscarnoticias')
    const tnoticia = await url.json()
    setNoticia(tnoticia)
    console.log(tnoticia)
  }

  return (
    <div>
      <Route exact path='/noticias'>
        <Menu />
        <HomeBanner />
        <TopNoticias />
        <Noticias />
      </Route>
      <Route exact path='/ver/noticia/:idnoticia' component={Visualizar}>
      <Menu />
      <Visualizar />
    </Route>
    <Route exact path='/noticias/publicar'>
      <Menu />
      <NuevaNoticia />
    </Route>
    </div>
  );
}

export default App;
