import React from 'react' 
import { useParams } from 'react-router-dom'
import TopNoticias from '../TopNoticias/TopNoticias';
import classes from './Visualizar.module.css'

const Visualizar = () => {
let {idnoticia} = useParams();

const [vernoticia, setVerNoticia] = React.useState([])

React.useEffect(() => {
    ConsultarNoticiasTop15()
}, [])
    
const ConsultarNoticiasTop15 = async () => {
    const url = await fetch('http://localhost:8080/api/buscarnoticia/'.concat(idnoticia))
    const tnoticia = await url.json()
    setVerNoticia(tnoticia)
}

document.title = "BoxPosting - ".concat(vernoticia.titulo_noticia);

    return <div> 
        <TopNoticias />
    <div className={classes.BOXPagina}>
        <h3 className={classes.BOXNoticia}>Noticias:</h3>
    <h1 className={classes.BOXTitulo}>{vernoticia.titulo_noticia}</h1>
        <img src={vernoticia.imagen_noticia} alt={vernoticia.imagen_noticia} 
        className={classes.BOXImagen} />
        <p className={classes.BOXParrafo}>{vernoticia.texto_noticia}</p>
    </div>
    </div>
}

export default Visualizar