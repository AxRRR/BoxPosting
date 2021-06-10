import classes from './TopNoticias.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TopNoticias = (props) => {
const [noticiatop15, setNoticiaTop15] = React.useState([])

React.useEffect(() => {
    ConsultarNoticiasTop15()
}, [])
    
const ConsultarNoticiasTop15 = async () => {
    const url = await fetch('http://localhost:8080/api/ultimasnoticiasordenadaporvistas')
    const tnoticia = await url.json()
    setNoticiaTop15(tnoticia)
}

var RenderNoticiasTop15 = noticiatop15.slice(0, 15)

const NoticiaHandler = (id) => {
    props.onNoticiaHandler(id)
    console.log(id)
}

    return <div>
        <ul className={classes.TOP_List}>
            <h2 className={classes.TOP_Titulo}>Lo más visto:</h2>
        {RenderNoticiasTop15.map((top15) => (
            <li className={classes.TOP_Box}>
            <Link to={"/ver/noticia/" + top15.id_noticia}><img src={top15.imagen_noticia}
                alt={top15.imagen_noticia} className={classes.TOP_Img} 
                onClick={() => NoticiaHandler(top15.id_noticia)} />
                </Link>
                <p className={classes.TOP_Parrafo}>{top15.texto_noticia}</p>
            </li>
            ))}
        </ul>
    </div>
}

export default TopNoticias