import React from 'react'
import styles from './Login.module.css'
import logo_login from './../../assets/icons/logo_login.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <form>
          <img src={logo_login} alt="logo_login" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha"/>
          <span id={styles.senha}><Link className={styles.link} to="/">Esqueceu sua senha?</Link></span>
          <button>ENTRAR</button>
          <span id={styles.cadastro}>Novo aqui? <Link className={styles.link} to='/cadastro'>Cadastre-se</Link></span>
        </form>
      </div>
    </div>
  )
}