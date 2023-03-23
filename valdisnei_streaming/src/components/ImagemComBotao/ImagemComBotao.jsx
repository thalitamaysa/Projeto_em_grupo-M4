import Play from '../../assets/icons/play.svg';
import Adicionar from '../../assets/icons/adicionar.png';
import styles from './ImagemComBotao.module.css';
import Megan from '../../assets/img/filmes/megan.jpg';
import hp from '../../assets/img/filmes/hp.png';
import GatoDeBotas from '../../assets/img/filmes/gatosDeBotas.jpg';
mport avatar from '../../assets/img/filmes/avatar.jpg';
import oautodacompadecia from '../../assets/img/filmes/oautodacompadecida.jpg';
import TeenWolff from '../../assets/img/filmes/TeenWolff.jpg'
import wakandaParaSempre from '../../assets/img/filmes/wakandaParaSempre.jpg'
import React, { useState } from 'react';

const sugestões = [
  {
  id: 1,
  src: hp,
  title: 'Harry Potter',
  duration:100
},
{
  id: 2,
  src: oautodacompadecia,
  title: 'O Auto da Compadecida',
  duration:84
},
{
  id: 3,
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
}
];

const emAlta = [
  {
    id: 1,
    src: hp,
    title: 'Harry Potter',
      duration:100
    },
  
    {
      id: 2,
      src: oautodacompadecia,
      title: 'O Auto da Compadecida',
      duration:84
    }
  ];

  const lançamentos =  [{
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
    src: Megan,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 6,
    src: hp,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 7,
    src: Megan,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 8,
    src: hp,
    title: 'Harry Potter',
    duration:100
  },
  
  
];
   
  
  function ImagemComBotao() {
   
    
    return (
      // filmes 
      <div>
        <div className={styles.container}>
          <div className={styles.textoTop10}>Sugestões</div>
          {sugestões.map(imagem => (
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
      <div className={styles.textoTop10}>Em alta</div>
      {emAlta.map(imagem => (
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

      <div className={styles.container3}>
      <div className={styles.textoTop10}>Lançamentos</div>
      {lançamentos.map(imagem => (
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




      
      </div>
              
              
              
              
               
             
             

            
            
            
    
          
         
    );
  }
  

export default ImagemComBotao;