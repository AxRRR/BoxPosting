import classes from './SignIn.module.css'
import React, { useState } from 'react'

const SignIn = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    }
  
      const [ form, setForm ] = 
      useState({
        id: Math.random() * 1000000000,
        nombre: '1',
        password: '',
        email: '',
        nacionalidad: '',
        nacimiento: ''
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
                  mode: 'no-cors',
                  credentials: 'include',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(form)
              }
              await fetch('http://localhost:8080/api/registrar', config)
          } catch (error) {
      
          }
          return <div></div>
        }
    return <div className={classes.BOXForm}>
        <ul className={classes.BOXListStyle}>
            <form onSubmit={handleSubmit}>
                <li>
                    <h2>Ingresa todos los datos requeridos para poder registrarte:</h2>
                </li>
                <li>
                    <p>Ingresa tu nombre de usuario:</p>
                    <input type='text' className={classes.BOXFormInput} 
                    name='nombre' onChange={handleChange} />
                </li>
                <li>
                    <p>Ingresa tu contraseña:</p>
                    <input type='password' className={classes.BOXFormInput} 
                    name='password' onChange={handleChange} />
                </li>
                <li>
                    <p>Ingresa tu correo eléctronico:</p>
                    <input type='text' className={classes.BOXFormInput} 
                    name='email' onChange={handleChange} />
                </li>
                <li>
                    <p>Escoge tu nacionalidad</p>
                    <select className={classes.BOXFormInput}
                    name='nacionalidad'
                    onChange={handleChange}> 
                        <option value='Mexico'>México</option>
                        <option value='España'>España</option>
                        <option value='Chile'>Chile</option>
                        <option value='Colombia'>Colombia</option>
                    </select>
                </li>
                <li>
                    <p>Ingresa tu nombre de usuario:</p>
                    <input type='date' name='nacimiento' 
                    onChange={handleChange}
                    className={classes.BOXFormInput} />
                </li>
                <li>
                <input type='submit' 
                    value='Publicar noticia' 
                    onClick={handleClose}/>
                </li>
            </form>
        </ul>
    </div>
}

export default SignIn