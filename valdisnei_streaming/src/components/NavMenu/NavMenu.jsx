import {Link} from "react-router-dom"
import styles from "./NavMenu.module.css"
import Logo from "../../assets/icons/logo.jpg"
import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className={styles.NavMenu}>
        <img src={Logo} alt="" />
        <Link to={"/"}>Inicio</Link>
        <Link to={"/serie"}>Series</Link>
        <Link to={"/filme"}>Filmes</Link>
        <Link to={"/musica"}>Musicas</Link>
        <Link to={"/"}>Minha Lista</Link>
      </nav>
    </div>
  )
}


