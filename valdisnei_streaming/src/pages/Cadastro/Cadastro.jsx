import React from 'react'
import styles from './Cadastro.module.css'
import logo_login from './../../assets/icons/logo_login.png'
import user from './../../assets/icons/user.png'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer';

export default function Cadastro() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.formulario}>
        <form>
          <img id='logo' src={logo_login} alt="logo valdisnei" />
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome"/>
          <input type="text" placeholder="Data de nascimento"/>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha"/>
          <input type="text" placeholder="Confirme sua senha"/>
          <button>CADASTRAR</button>
          <span id={styles.login}>Já é cadastrado? <Link className={styles.link} to='/login'>Login</Link></span>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}
