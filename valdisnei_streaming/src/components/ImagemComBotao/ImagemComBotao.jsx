import Play from '../../assets/icons/play.svg';
import Adicionar from '../../assets/icons/adicionar.png';
import styles from './ImagemComBotao.module.css';
import Megan from '../../assets/img/filmes/megan.jpg';
import hp from '../../assets/img/filmes/hp.png';
import GatoDeBotas from '../../assets/img/filmes/gatosDeBotas.jpg';

const imagens = [
  {
    id: 1,
    src: Megan,
    title: 'Megan',
    duration: 120
  },
  {
    id: 2,
    src: Megan,
    title: 'Megan',
    duration:120
  },
  {
    id: 3,
    src: GatoDeBotas,
    title: 'Gato de Botas',
    duration: 160
  },
  {
    id: 4,
    src: hp,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 5,
    src: Megan,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 6,
    src: hp,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 7,
    src: Megan,
    title: 'Harry Potter',
    duration:100
  },
  {
    id: 8,
    src: hp,
    title: 'Harry Potter',
    duration:100
  },
  
  
];

const playlist = [
    {
      id: 1,
      src: Megan,
      title: 'Megan'
    },
    {
      id: 2,
      src: Megan,
      title: 'Megan'
    }
  ];

function ImagemComBotao() {
   

    return (
        // filmes 
      <div>
        <div className={styles.container}>
          <div className={styles.textoTop10}>Top 10</div>
          {imagens.map(imagem => (
            <div className={styles.btnWrap} key={imagem.id}>
              <div className={styles.image}>
                <img src={imagem.src} alt={imagem.title}/>  
                <button className={styles.botaoPlay}>

                  <div className={styles.play}>
                    <img src={Play} alt="iconePlay" className={styles.icon} />
                  </div>
                  
                </button>
                <button className={styles.botaoADD}>
                  <div className={styles.play}>
                    <img src={Adicionar} alt="iconeADD" className={styles.icon2}></img>
                  </div>
                </button>
              </div>  
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default ImagemComBotao;