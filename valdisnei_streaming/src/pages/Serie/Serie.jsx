import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../components/Carousel/Carousel.module.css'
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

export default function Serie() {
  return (
    <>
    <HeaderMenu/>
    <Container>
    <div className={styles.Carousel}>
      <Carousel />
    </div>
    </Container>
    <Footer/>
    </> 
  );

}


    

   


  





