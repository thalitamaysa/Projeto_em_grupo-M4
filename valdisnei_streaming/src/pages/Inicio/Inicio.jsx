import React from 'react'
import styles from './Inicio.module.css';
import BreakingBad from '../../assets/img/series/breakinbad.png';
import hp from '../../assets/img/filmes/hp.png';
import pink from '../../assets/img/musicas/capapinkfloid.png';
export default function Inicio() {
  return (
    <div className={styles.InicioBody}>

      <div  className={styles.centroInicio}>

        <div className={styles.breaking}>
          <img src={BreakingBad}></img>
          <span><h2>Series</h2></span>
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


    
    
  )
}
