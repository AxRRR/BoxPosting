import React from 'react' 
import Menu from '../Menu/Menu'
import TopNoticias from '../TopNoticias/TopNoticias'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Visualizar = () => {
    const [vernoticia, setVerNoticia] = useState(0)

    const VerHandler = async (props) => {
        console.log(props)
        setVerNoticia(1)
        console.log(vernoticia)
      }

    return <div>
        <TopNoticias onNoticiaHandler={VerHandler} />
        { vernoticia === 1 ? <div>
            
        </div> : <p></p>}
    </div>
}

export default Visualizar