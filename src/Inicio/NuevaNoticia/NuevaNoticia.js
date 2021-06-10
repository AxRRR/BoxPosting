import classes from './NuevaNoticia.module.css'
import React, { useState } from 'react'

const NuevaNoticia = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

    const [ form, setForm ] = 
    useState({
      id: Math.random() * 1000000000,
      vistas: '1',
      titulo_noticia: '',
      imagen_noticia: '',
      texto_noticia: '',
      genero: ''
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        console.log(form)
        
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            await fetch('http://localhost:8080/api/agregarnoticia', config)
        } catch (error) {
    
        }
        return <div></div>
      }

    return <div className={classes.BOXNoticiaNueva}>
        <ul>
            <li>
                <form className={classes.BOXFormulario}
                onSubmit={handleSubmit}>
                    <h3>Rellena los datos correspondiendes para publicar una nueva noticia:</h3>
                    <label className={classes.BOXTexto}>Ingresa el titulo de la noticia:
                    </label>
                        <textarea className={classes.BOXTextArea}
                        name='titulo_noticia' 
                        onChange={handleChange} />
                    <label className={classes.BOXTexto}>Ingresa imagen de la noticia:
                    </label>
                        <textarea className={classes.BOXTextArea2} 
                        name='imagen_noticia'
                        onChange={handleChange} />
                    <label className={classes.BOXTexto}>Ingresa el cuerpo de la noticia:
                    </label>
                        <textarea className={classes.BOXTextArea3} 
                        name='texto_noticia'
                        onChange={handleChange} />
                    <label className={classes.BOXTexto}>Seleciona la categoria:
                    </label>  
                    <select className={classes.BOXSelect}
                    name='genero' 
                    onChange={handleChange}>
                        <option value='1'>Tecnologia</option>
                        <option value='2'>internacional</option>
                        <option value='3'>Cine y Series</option>
                        <option value='4'>Entretenimiento</option>
                        <option value='5'>Videojuegos</option>
                        <option value='6'>Deportes</option>
                        <option value='7'>Anime</option>
                    </select>
                    <p>Recuerda que tu noticia tiene que pasar por la autorización de un moderador/administrador.</p>
                    <input type='submit' 
                    value='Publicar noticia' 
                    onClick={handleClose}/>
                </form>
                <li className={classes.PreviaBOX}>
                    <h1>{form.titulo_noticia}</h1>
                    <img src={form.imagen_noticia} alt={form.imagen_noticia} 
                    className={classes.PrevImagen}/>
                    <p>{form.texto_noticia}</p>
                </li>
            </li>
        </ul>
    </div>
}

export default NuevaNoticia