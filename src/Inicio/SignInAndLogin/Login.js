import React from 'react'
import { useFormAutomatic } from '../components/useFormAutomatic'
import classes from './Login.module.css'

const Login = () => {

  const [form, handlerInputChange] = useFormAutomatic({
    username: '',
    password: '',
  })

  const { username, password } = form

  const handleSubmit = async (e) => {
    if(form.username && form.password != null){
        console.log(form)
        e.preventDefault()
        const axios = require('axios')
        const qs = require('qs')
        const data = qs.stringify({
        username: form.username,
        password: form.password,
        grant_type: 'password',
        })
        const config = {
        method: 'post',
        url: 'http://localhost:8080/oauth/token',
        headers: {
            Authorization:
            'Basic Ym94cG9zdGluZ3JlYWN0YXBwOmJveHBvc3RpbmdyZWFjdGFwcDU0MzIx',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
        }

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    else {
       return console.log('Error en la autenticacion.')
    }
  }

  return (
    <div>
      <div className={classes.BOX}>
        <form onSubmit={handleSubmit}>
          <span className={classes.LoginSpan}>Ingresa tu nombre</span>
          <input
            name="username"
            value={username}
            onChange={handlerInputChange}
            className={classes.LoginInput}
          />
          <span className={classes.LoginSpan}>Ingresa tu password</span>
          <input
            name="password"
            value={password}
            onChange={handlerInputChange}
            className={classes.LoginInput}
          />
          <input
            type="submit"
            value="iniciar"
            className={classes.LoginInput}
          />
        </form>
      </div>
    </div>
  )
}

export default Login
