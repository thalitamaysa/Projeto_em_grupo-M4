import React from 'react'
import styles from './NavBranco.module.css'
import Logo from "../Img/logo.jpg"
import IconeInicio from "../Img/home.jpg"

export default function NavBranco() {
  return (
    <div>
      <nav className={styles.NavBranco}>
        <img src={Logo} alt="Logo" />
        <Link to={"/"}>Inicio</Link>
        <img src={IconeInicio} alt="Inicio" />
        <Link to={"/serie"}>Series</Link>
        <Link to={"/filme"}>Filmes</Link>
        <Link to={"/musica"}>Musicas</Link>
        <Link to={"/minha lista"}>Minha Lista</Link>
      </nav>
    </div>
  )
}
