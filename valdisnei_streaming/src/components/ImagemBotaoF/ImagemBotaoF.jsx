import Play from '../../assets/icons/play.svg';
import Adicionar from '../../assets/icons/adicionar.png';
import styles from './ImagemBotaoF.module.css';
import Megan from '../../assets/img/filmes/megan.jpg';
import hp from '../../assets/img/filmes/harry.jpg';
import GatoDeBotas from '../../assets/img/filmes/gatoDeBotas.jpg';
import avatar from '../../assets/img/filmes/avatar.jpg';
import oautodacompadecida from '../../assets/img/filmes/oautodacompadecida.jpg';
import TeenWolff from '../../assets/img/filmes/TeenWolff.jpg';
import wakandaParaSempre from '../../assets/img/filmes/wakandaParaSempre.jpg';
import One from '../../assets/img/filmes/onepiece.jpg';
import Anjos from '../../assets/img/filmes/anjos.jpg';
import Constantine from '../../assets/img/filmes/constantine.jpg';
import Gente from '../../assets/img/filmes/gentegrande.jpg';
import bohemian from '../../assets/img/filmes/bohemian.jpg';
import interestelar from '../../assets/img/filmes/interestelar.jpg';
import guerra from '../../assets/img/filmes/guerra.jpg';
import princesa from '../../assets/img/filmes/princesa.jpg';
import React, { useState } from 'react';

const fsugestões = [
  {
  id: 1,
  src: hp,
  title: 'Harry Potter e o Prisoneiro de Azkaban',
  duration:100
},
{
  id: 2,
  src: bohemian,
  title: 'Bohemian Rhapsody',
  duration: 134
},
{
  id: 3,
  src: interestelar,
  title: 'Interestelar',
  duration: 169

},
{
  id: 4,
  src: guerra,
  title: 'Guerra mundial Z',
  duration: 116
},
{
  id: 5,
  src: princesa,
  title: 'A Princesa e o Sapo',
  duration: 97
}
];

const femAlta = [
  {
    id: 1,
    src: One,
    title: 'One Piece: RED',
      duration: 115
    },
  
    {
      id: 2,
      src: oautodacompadecida,
      title: 'O Auto da Compadecida',
      duration: 84
    },
    {
      id: 3,
      src: Anjos,
      title: 'Anjos da noite: Guerras de Sangue',
      duration: 91
    },
    {
      id: 4,
      src: Gente,
      title: 'Gente Grande',
      duration: 102
    },
    {
      id: 5,
      src: Constantine,
      title: 'Constantine',
      duration: 121
    }
  ];

  const flançamentos =  [{
    id: 1,
    src: Megan,
    title: 'Megan',
    duration: 120
  },
  {
    id: 2,
    src: avatar,
    title: 'Avatar 2',
    duration: 187.2
  },
  {
    id: 3,
    src: GatoDeBotas,
    title: 'Gato de Botas 2',
    duration: 160
  },
  {
    id: 4,
    src: TeenWolff ,
    title: 'Teen Wolf: O filme',
    duration: 140
  },
  {
    id: 5,
    src: wakandaParaSempre,
    title: 'Wakanda para sempre',
    duration:100
  },  
];
   

  
  function ImagemComBotao() {
   
    
    return (
      // filmes 
      <div>
        <div className={styles.container}>
          <div className={styles.texto}>Sugestões</div>
          {fsugestões.map(imagem => (
                <div className={styles.btnWrap} key={imagem.id}>
            <div className={styles.image}>
              <img src={imagem.src} alt={imagem.title}/> 
                <button className={styles.botaoPlay}>
                  <div className={styles.play}>
                    <img src={Play} alt="iconePlay" className={styles.icon} />
                  </div>
                </button>
                <button className={styles.botaoADD}>
                  <div className={styles.play}>
                    <img src={Adicionar} alt="iconeADD" className={styles.icon2}></img>
                  </div>
                </button>
                </div>
              
              
              </div> 
         ))}
              </div> 
            

      <div className={styles.container2}>
      <div className={styles.texto}>Em alta</div>
      {femAlta.map(imagem => (
      <div className={styles.btnWrap} key={imagem.id}>
        <div className={styles.image}>
          <img src={imagem.src} alt={imagem.title}/> 
            <button className={styles.botaoPlay}>

              <div className={styles.play}>
                <img src={Play} alt="iconePlay" className={styles.icon} />
              </div>
              
            </button>
            <button className={styles.botaoADD}>
              <div className={styles.play}>
                <img src={Adicionar} alt="iconeADD" className={styles.icon2}/>
              </div>
            </button>
            </div>
          
          
          </div> 
      ))}
      </div>

      <div className={styles.container3}>
      <div className={styles.texto}>Lançamentos</div>
      {flançamentos.map(imagem => (
        <div className={styles.btnWrap} key={imagem.id}>
            <div className={styles.image}>
          <img src={imagem.src} alt={imagem.title}/> 
            <button className={styles.botaoPlay}>

              <div className={styles.play}>
                <img src={Play} alt="iconePlay" className={styles.icon} />
              </div>
              
            </button>
            <button className={styles.botaoADD}>
              <div className={styles.play}>
                <img src={Adicionar} alt="iconeADD" className={styles.icon2}/>
              </div>
            </button>
            </div>
          </div> 
      ))}
      </div>      
      </div>
    );
  }
  

export default ImagemComBotao;