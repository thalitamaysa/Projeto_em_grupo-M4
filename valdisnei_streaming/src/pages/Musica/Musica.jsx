import React from 'react'
import styles from './Musica.module.css'
import { Link } from 'react-router-dom'
import Dormir from './../../assets/img/musicas/Dormir.png'
import Funk from './../../assets/img/musicas/Funk.png'
import HipHop from './../../assets/img/musicas/HipHop.png'
import MPB from './../../assets/img/musicas/MPB.png'
import PagodeSamba from './../../assets/img/musicas/PagodeSamba.png'
import Pop from './../../assets/img/musicas/Pop.png'
import ParaTreinar from './../../assets/img/musicas/ParaTreinar.png'
import RB from './../../assets/img/musicas/RB.png'
import Relax from './../../assets/img/musicas/Relax.png'
import Rock from './../../assets/img/musicas/Rock.png'
import Sertanejo from './../../assets/img/musicas/Sertanejo.png'
import Viajar from './../../assets/img/musicas/Viajar.png'

import adicionar from './../../assets/icons/adicionar.png'
import alterar from './../../assets/icons/alterar.png'
import excluirlista from './../../assets/icons/excluirlista.png'

export default function Musica() {
  return (
    
    <div className={styles.container}>
      <div className={styles.playlist}>
        <div className={styles.icons}>
          <img src={adicionar} alt="" />
          <span>Criar playlist</span>
        </div>
        <div className={styles.icons}>
          <img src={alterar} alt="" />
          <span>Tornar playlist pública</span>
        </div>
        <div className={styles.icons}>
          <img src={excluirlista} alt="" />
          <span>Remover playlist</span>
        </div>
      </div>
      <div className={styles.opcoes}>
        <div className={styles.linha1}>
          <img src={PagodeSamba} alt="" />
          <img src={Sertanejo} alt="" />
          <img src={Funk} alt="" />
          <img src={RB} alt="" />
        </div>
        <div className={styles.linha2}>
          <img src={HipHop} alt="" />
          <img src={MPB} alt="" />
          <img src={Pop} alt="" />
          <img src={Rock} alt="" />
        </div>
        <div className={styles.linha3}>
          <img src={ParaTreinar} alt="" />
          <img src={Dormir} alt="" />
          <img src={Viajar} alt="" />
          <img src={Relax} alt="" />
        </div>
      </div>
    </div>
    )
  }
  
  // <div className={styles.container}>
  //   <div className={linha1}>
  //     <img src={PagodeSamba} alt="" />
  //     <img src={Sertanejo} alt="" />
  //     <img src={Funk} alt="" />
  //     <img src={RB} alt="" />
  //   </div>
  //   <div className={linha2}>
  //     <img src={HipHop} alt="" />
  //     <img src={MPB} alt="" />
  //     <img src={Pop} alt="" />
  //     <img src={Rock} alt="" />
  //   </div>
  //   <div className={linha3}>
  //     <img src={ParaTreinar} alt="" />
  //     <img src={Dormir} alt="" />
  //     <img src={Viajar} alt="" />
  //     <img src={Relax} alt="" />
  //   </div>
  // </div>