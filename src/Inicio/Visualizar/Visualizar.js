import React from 'react' 
import Menu from '../Menu/Menu'
import TopNoticias from '../TopNoticias/TopNoticias'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './Visualizar.module.css'

const Visualizar = () => {
    const [vernoticia, setVerNoticia] = useState(0)

    const VerHandler = async (props) => {
        console.log(props)
        setVerNoticia(0)
        console.log(vernoticia)
      }

    return <div>
        <TopNoticias onNoticiaHandler={VerHandler} />
        { vernoticia === 0 ? <div>
            <p className={classes.color}>HOLAAAAAAAA</p>
            </div> : <p className={classes.color}>NO HOLAAAAA</p>}
    </div>
}

export default Visualizar