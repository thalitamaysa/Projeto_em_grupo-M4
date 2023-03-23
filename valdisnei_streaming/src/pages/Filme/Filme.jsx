import React from 'react'
import ImagemBotaoF from '../../components/ImagemBotaoF/ImagemBotaoF';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../components/CarouselFilme/CarouselFilme.module.css'
import CarouselFilme from '../../components/CarouselFilme/CarouselFilme';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import { Container } from 'react-bootstrap';



export default function Filme() {
  return (
    <>
    <HeaderMenu/>
    <Container>
    <CarouselFilme />
      </Container>
      <ImagemBotaoF />
    <Footer/>
    </>

  );

}
