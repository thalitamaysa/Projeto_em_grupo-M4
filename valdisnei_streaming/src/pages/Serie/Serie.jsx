import React from 'react'
import CarouselSerie from '../../components/CarouselSerie/CarouselSerie';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../components/CarouselSerie/CarouselSerie.module.css'
import ImagemBotaoS from '../../components/ImagemBotaoS/ImagemBotaoS';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

export default function Serie() {
  return (
    <>
    <HeaderMenu/>
    <Container>
      <CarouselSerie/>
    </Container>
    <ImagemBotaoS />
    <Footer/>
    </> 

  );

}


    

   


  





