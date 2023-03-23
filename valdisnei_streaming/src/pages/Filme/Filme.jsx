import React from 'react'
import ImagemComBotao from '../../components/ImagemComBotao/ImagemComBotao';
import 'bootstrap/dist/css/bootstrap.css';
// import PlaylistBottom from '../../components/PlaylistBottom/PlaylistBottom';
import styles from '../../components/CarouselFilme/Carousel.module.css'
import Carousel from '../../components/CarouselFilme/Carousel';


export default function Filme() {
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
