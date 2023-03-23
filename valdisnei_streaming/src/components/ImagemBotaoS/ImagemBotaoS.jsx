import Play from '../../assets/icons/play.svg';
import Adicionar from '../../assets/icons/adicionar.png';
import styles from './ImagemBotaoS.module.css';
import aliceinbordeland from '../../assets/img/series/aliceinbordeland.jpg';
import bomdia from '../../assets/img/series/bomdia.jpg';
import breakingbad from '../../assets/img/series/breakingbad.jpg';
import cidadeinvisivel from '../../assets/img/series/cidadeinvisivel.jpg';
import dahmer from '../../assets/img/series/dahmer.jpg';
import desalma from '../../assets/img/series/desalma.jpg';
import got from '../../assets/img/series/got.jpg';
import irmandade from '../../assets/img/series/irmandade.jpg';
import lucifer from '../../assets/img/series/lucifer.jpg';
import omecanismo from '../../assets/img/series/omecanismo.jpg';
import orangeisblack from '../../assets/img/series/orangeisblack.jpg';
import pacificador from '../../assets/img/series/pacificador.jpg';
import recordofragnarok from '../../assets/img/series/recordofragnarok.jpg';
import round6 from '../../assets/img/series/round6.jpg';
import thesandman from '../../assets/img/series/thesandman.jpg';
import React, { useState } from 'react';


const ssugestões = [
  {
  id: 1,
  src: orangeisblack,
  title: 'Orange is the new Black',
  duration: '7 temporadas'
},
{
  id: 2,
  src: got,
  title: 'Game of Throne',
  duration: '8 temporadas'
},
{
  id: 3,
  src: breakingbad,
  title: 'Breaking Bad',
  duration: '5 temporadas'

},
{
  id: 4,
  src: lucifer,
  title: 'Lucifer',
  duration: '6 temporadas'
},
{
  id: 5,
  src: pacificador,
  title: 'Pacificador',
  duration: '1 temporada'
}
];

const semAlta = [
  {
    id: 1,
    src: thesandman,
    title: 'The Sandman',
      duration: '1 temporada'
    },
  
    {
      id: 2,
      src: aliceinbordeland,
      title: 'Alice in bordelands',
      duration: '2 temporadas'
    },
  {
    id: 3,
    src: round6,
    title: 'Round 6',
    duration: '1 temporada'
    },
    {
      id: 4,
      src: dahmer,
      title: 'Dahmer: O canibal americano',
      duration: '1 temporada'
    },
    {
      id: 5,
      src: recordofragnarok,
      title: 'Record of Ragnarok',
      duration: '2 temporadas'
    }
  ];

  const snacionais =  [{
    id: 1,
    src: cidadeinvisivel,
    title: 'Cidade Invisivel',
    duration: '2 temporadas'
  },
  {
    id: 2,
    src: omecanismo,
    title: 'O mecanismo',
    duration: '2 temporadas'
  },
  {
    id: 3,
    src: bomdia,
    title: 'Bom dia Veronica',
    duration: '2 temporadas'
  },
  {
    id: 4,
    src: desalma ,
    title: 'Desalma',
    duration: '2 temporadas'
  },
  {
    id: 5,
    src: irmandade,
    title: 'Irmandade',
    duration: '2 temporadas'
  }
];
  
  function ImagemComBotao() {
   
    
    return (
      // filmes 
      <div>
        
      <div className={styles.container}>
          <div className={styles.texto}>Sugestões</div>
          {ssugestões.map(imagem => (
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
            

      <div className={styles.container2}>
      <div className={styles.texto}>Em alta</div>
      {semAlta.map(imagem => (
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
      <div className={styles.texto}>Nacionais</div>
      {snacionais.map(imagem => (
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