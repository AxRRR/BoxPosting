import React from 'react'
import Menu from "./Inicio/Menu/Menu";
import HomeBanner from "./Inicio/Principal/HomeBanner";
import Noticias from "./Inicio/Principal/Noticias";
import { Route } from 'react-router-dom'
import Visualizar from "./Inicio/Visualizar/Visualizar";

function App() {
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

  return (
    <div>
      <Route exact path='/noticias'>
        <Menu />
        <HomeBanner />
        <Visualizar />
        <Noticias />
      </Route>
      {noticia.map((news) => (
      <Route exact path={'/ver/' + news.id_noticia}>
        <Menu />
      </Route>
      ))}
    </div>
  );
}

export default App;
