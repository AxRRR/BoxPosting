import classes from './SignIn.module.css'
import React, { useState } from 'react'

const SignIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    nacionalidad: '',
    nacimiento: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (form.username && form.password && form.email != null){
//       try {
//         let config = {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(form),
//         }
//         await fetch('http://localhost:8080/api/registrar', config)
//       } catch (error) {}
//         console.log(error)
//     }
//     else{
//         return console.log('El username debe de ser mayor a 3 cáracteres!')
//     }
//   }

    const handleSubmit = async (e) => {
    e.preventDefault()
    const axios = require('axios');
    const qs = require('qs')
    const data = qs.stringify({
        username: form.username,
        password: form.password,
        email: form.email,
        nacimiento: form.nacimiento,
        nacionalidad: form.nacionalidad,
    });

    const config = {
    method: 'post',
    url: 'http://localhost:8080/api/registrar',
    headers: { 
            Accept: 'application/json',
            'Content-Type': 'application/json',
    },
    body: data,
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

  return (
    <div className={classes.BOXForm}>
      <ul className={classes.BOXListStyle}>
        <form onSubmit={handleSubmit}>
          <li>
            <h2>Ingresa todos los datos requeridos para poder registrarte:</h2>
          </li>
          <li>
            <p>Ingresa tu nombre de usuario:</p>
            <input
              type="text"
              className={classes.BOXFormInput}
              name="username"
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Ingresa tu contraseña:</p>
            <input
              type="password"
              className={classes.BOXFormInput}
              name="password"
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Ingresa tu correo eléctronico:</p>
            <input
              type="text"
              className={classes.BOXFormInput}
              name="email"
              onChange={handleChange}
            />
          </li>
          <li>
            <p>Escoge tu nacionalidad</p>
            <select
              className={classes.BOXFormInput}
              name="nacionalidad"
              onChange={handleChange}
            >
              <option value="Mexico">México</option>
              <option value="España">España</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
            </select>
          </li>
          <li>
            <p>Ingresa tu nombre de usuario:</p>
            <input
              type="date"
              name="nacimiento"
              onChange={handleChange}
              className={classes.BOXFormInput}
            />
          </li>
          <li>
            <input type="submit" value="Publicar noticia" />
          </li>
        </form>
      </ul>
    </div>
  )
}

export default SignIn
