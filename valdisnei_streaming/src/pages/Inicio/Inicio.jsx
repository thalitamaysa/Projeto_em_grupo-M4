import React from 'react'
import styles from './Inicio.module.css';
import BreakingBad from '../../assets/img/series/breakinbad.png';
import hp from '../../assets/img/filmes/hp.png';
import pink from '../../assets/img/musicas/capapinkfloid.png';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';

export default function Inicio() {
  return (
    <>
    <HeaderMenu/>
    <div className={styles.InicioBody}>
      <div  className={styles.centroInicio}>

        <div className={styles.breaking}>
          <img src={BreakingBad}></img>
          <span><h2>Séries</h2></span>
        </div>

        <div className={styles.breaking}>
          <img src={hp}></img>
          <span><h2>Filmes</h2></span>
        </div>

         <div className={styles.breaking}>
          <img src={pink}></img>
          <span><h2>Músicas</h2></span>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}
