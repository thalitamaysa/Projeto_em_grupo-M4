import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';
//  



export default function CarouselNoController() {
  return (
    <Container fluid>
      <Carousel fade>
      <Carousel.Item>
        <img className='img1' src='https://i.postimg.cc/7Zc5pv7L/Poster-Harry-Potter-e-o-Prisioneiro-de-Azkaban.webp' border='0' width={'250px'} object-fit={'contain'} display={'flex'} justify={'center'} align-itens={'center'} alt='Poster-Harry-Potter-e-o-Prisioneiro-de-Azkaban'/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img2' src='https://i.postimg.cc/Ssd3cKdT/harry.jpg' border='0' alt='harry'/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img3' src='https://i.postimg.cc/9McFWrzJ/Design-sem-nome.png' border='0' alt='Design-sem-nome'/>
      </Carousel.Item>
    </Carousel>
  </Container>
    
  );
}
