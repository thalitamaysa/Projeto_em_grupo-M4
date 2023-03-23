import React from 'react'
import styles from './Login.module.css'
import logo_login from './../../assets/icons/logo_login.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

import Footer from '../../components/Footer/Footer';

// toastify - https://www.npmjs.com/package/react-toastify


export default function Login() {

  const navigate = useNavigate()

  const [login, setLogin] = useState({})
  
  const loginApi = () => {
    axios.post('http://localhost:8080/login')
    .then((response) => {})
    .catch((error) => {})
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.formulario}>
        <form>
          <img src={logo_login} alt="logo valdisnei" />
          <input onChange={(event) => onChange(event)} name="email" type="text" placeholder="Email" />
          <input onChange={(event) => onChange(event)} name="senha" type="password" placeholder="Senha"/>
          <span id={styles.senha}><Link className={styles.link} to="/">Esqueceu sua senha?</Link></span>
          <Link to='/'><button onClick={() => {
            loginApi()
            flag == false ?
            navigate('/inicio'):
            alert('Email ou senha incorretos')
          }}>ENTRAR</button></Link>
          <span id={styles.cadastro}>Novo aqui? <Link className={styles.link} to='/cadastro'>Cadastre-se</Link></span>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}