import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';
import { Container } from 'react-bootstrap';





export default function CarouselNoController() {
  return (
      // <Container>
      <Carousel fade className={styles.Carousel} indicators={false}>
        <Carousel.Item interval={4000}> 
        <img  className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/DwBV3P8w/asbranquelas-1.jpg' border ='0' alt='asbranquelas-1'/>      
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img  className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/nh4jRM0p/avatar-filme-1.jpg' border='0' alt='avatar-filme-1'/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className='d-block w-100 rounded-3 shadow-4-strong' src='https://i.postimg.cc/rsmc7Z9c/oautodacompadecidacapa-1.jpg' border='0' alt='oautodacompadecidacapa-1'/>
        </Carousel.Item>
      </Carousel>
      // </Container>
    
  
    
  );
}



