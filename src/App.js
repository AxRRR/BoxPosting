import Menu from "./Inicio/Menu/Menu";
import HomeBanner from "./Inicio/Principal/HomeBanner";
import Noticias from "./Inicio/Principal/Noticias";
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Route exact path='/noticias'>
        <Menu />
        <HomeBanner />
        <Noticias />
      </Route>
    </div>
  );
}

export default App;
