import React from 'react'
import ImagemComBotao from '../../components/ImagemComBotao/ImagemComBotao';
import 'bootstrap/dist/css/bootstrap.css';
// import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';
import styles from '../../components/CarouselFilme/Carousel.module.css'
import Carousel from '../../components/CarouselFilme/Carousel';



export default function Filme() {
  return (
    <>
    <HeaderMenu/>
      <ImagemComBotao  />
    <Footer/>
    </>

  );

}
