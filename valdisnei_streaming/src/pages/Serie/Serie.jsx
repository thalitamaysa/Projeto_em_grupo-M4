import React from 'react'
import Carousel from '../../components/CarouselSerie/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../components/CarouselSerie/Carousel.module.css'
import ImagemComBotao from '../../components/ImagemComBotao/ImagemComBotao';

import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

export default function Serie() {
  return (
    <>
    <HeaderMenu/>
    <Container>
      <Carousel />
    </Container>
    <Footer/>
    </> 

  );

}


    

   


  





