import {Link} from "react-router-dom"
import styles from "./NavMenu.module.css"
import Logo from "../../assets/icons/logo_header.png"
import IconeInicio from "../../assets/icons/home.png"
import IconeMusica from "../../assets/icons/musica.png"
import IconeFilme from "../../assets/icons/filme.png"
import IconeMinhaLista from "../../assets/icons/minhaLista.png"
import IconeSeries from "../../assets/icons/tv.png"
import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className={styles.NavMenu}>
        <div className={styles.logo}>
          <img src={Logo} alt="" className={`${styles.logo} ${styles.logoTop}`} />
        </div>
        

        <div className={styles.linkContainer}>
          <img src={IconeInicio} alt="" className={styles.icones}/>
          <Link to={"/"} className={styles.links}>Inicio</Link>
        </div>

        <div className={styles.linkContainer}>
          <img src={IconeSeries} alt="" className={styles.icones} />
          <Link to={"/serie"} className={styles.links}>Series</Link>  
        </div>  
        
        <div className={styles.linkContainer}>
          <img src={IconeFilme} alt=""  className={styles.icones} />
          <Link to={"/filme"} className={styles.links}>Filmes</Link>
        </div>

        <div className={styles.linkContainer}>
          <img src={IconeMusica} alt=""  className={styles.icones}/>
          <Link to={"/musica"} className={styles.links}>Musicas</Link>
        </div>

        <div className={styles.linkContainer}>
          <img src={IconeMinhaLista} alt="" className={styles.icones} />
          <Link to={"/"} className={styles.links}>Minha Lista</Link>
        </div>
      </nav>
    </div>
  )
}