import React from 'react'
import styles from './NavBranco.module.css'

export default function NavBranco() {
  return (
    <div>
      <nav className={styles.NavBranco}>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/serie"}>Series</Link>
        <Link to={"/filme"}>Filmes</Link>
        <Link to={"/musica"}>Musicas</Link>
        <Link to={"/"}>Minha Lista</Link>
      </nav>
    </div>
  )
}
