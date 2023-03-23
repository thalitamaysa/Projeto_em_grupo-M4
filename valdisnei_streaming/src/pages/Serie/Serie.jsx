import React from 'react'
import Carousel from '../../components/CarouselSerie/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../components/CarouselSerie/Carousel.module.css'
import ImagemComBotao from '../../components/ImagemComBotao/ImagemComBotao';


export default function Serie() {
  return (
    <div className='container'>
       <div className={styles.Carousel}>
        <Carousel />
        </div>
        <div className={styles.filmes}>
      <ImagemComBotao  />
     
      </div>
    </div>
     
   
  );

}


    

   


  





