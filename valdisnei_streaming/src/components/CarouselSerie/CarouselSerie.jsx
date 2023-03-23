import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CarouselSerie.module.css';





export default function CarouselNoControlle() {
  return (
      
      <Carousel fade className={styles.Carousel} indicators={false}>
      <Carousel.Item interval={4000}> 
      <img  className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/qMx68Xcp/thesandman.jpg' border='0' alt='thesandman'/>      
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img  className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/3R1TxN5C/recordofragnarok.jpg' alt='recordofragnarok' border='0' />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/Xqv0GWnM/pacificador.jpg' alt='pacificador' border='0'/>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/tghb8DBc/bomdia.jpg' alt='bomdia' border='0'/>
      </Carousel.Item>
    </Carousel>
    
    
  
    
  );
}



