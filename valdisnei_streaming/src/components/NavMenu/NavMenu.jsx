import {Link} from "react-router-dom"
import styles from "./NavMenu.module.css"
import Logo from "../../assets/icons/logo_header_menu.png"
import IconeInicio from "../../assets/icons/home.png"
import IconeMusica from "../../assets/icons/musica.png"
import IconeFilme from "../../assets/icons/filme.png"
import IconeMinhaLista from "../../assets/icons/minhaLista.png"
import IconeSeries from "../../assets/icons/tv.png"
import IconeUser from "../../assets/icons/user.png"
import React, { useState } from 'react'

export default function Nav() {
const [searchTerm, setSearchTerm] = useState("")

/* Essa é uma função de callback para o usuário for digitar ela recebe um evento*/
function handleSearchInputChange(e){
  setSearchTerm(e.target.value)
}
/* Essa é uma função de callback quando o usuário envia os dados do formulário */
function handleSearchSubmit(e){
  e.preventDefault()
}

  return (
    <div className={styles.containerHeader}>
      <nav className={styles.NavMenu}>
        <div className={styles.logo}>
          <img src={Logo} alt="" className={`${styles.logo} ${styles.logoTop}`} />
        </div>
        <div className={styles.menu}>
          <div className={styles.linkContainer}>
            <img src={IconeInicio} alt="" className={styles.icones}/>
            <Link to={"/"} className={styles.links}>Início</Link>
          </div>

          <div className={styles.linkContainer}>
            <img src={IconeSeries} alt="" className={styles.icones} />
            <Link to={"/serie"} className={styles.links}>Séries</Link>  
          </div>  
          
          <div className={styles.linkContainer}>
            <img src={IconeFilme} alt=""  className={styles.icones} />
            <Link to={"/filme"} className={styles.links}>Filmes</Link>
          </div>

          <div className={styles.linkContainer}>
            <img src={IconeMusica} alt=""  className={styles.icones}/>
            <Link to={"/musica"} className={styles.links}>Músicas</Link>
          </div>

          <div className={styles.linkContainer1}>
            <img src={IconeMinhaLista} alt="" className={styles.icones} />
            <Link to={"/"} className={styles.links}>Minha Lista</Link>
          </div>
        </div>
      </nav>

      <div className={styles.searchContainer}>
        <form className={styles.handleSearch} onSubmit={handleSearchSubmit}>
            <input 
            type="text"
            placeholder={`Buscar...`}
            onChange = {handleSearchInputChange}
            value={searchTerm}
            className={styles.searchInput}
            />
          </form>
      </div>

      
      <div className={styles.userIcon}>
          <img src={IconeUser}/>
      </div>
    </div>
  )
}