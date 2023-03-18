import React from 'react';
import styles from './PlaylistBottom.module.css';
import hp from '../../assets/img/filmes/hp.png';
import Megan from '../../assets/img/filmes/megan.jpg';

const filmes = [
  {
    id: 1,
    title: 'Playlist 1',
    image: hp,
  },
  {
    id: 2,
    title: 'Playlist 2',
    image: Megan,
    
  },
  
];

function PlaylistBottom() {
  return (
    <div className={styles.filmesBottom}>
      <h2 className={styles.title}>Playlist's</h2>
      <div className={styles.filmesContainer}>
        {filmes.map(filme => (
          <div className={styles.filme} key={filme.id}>
            <img src={filme.image} alt={filme.title} />
           
            <p className={styles.filmeDescription}>{filme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistBottom;