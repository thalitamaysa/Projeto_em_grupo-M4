import React from 'react'
import styles from './Footer.module.css'
import logo_footer from './../../assets/icons/logo_footer.png'

export default function Footer() {
  return (
    <div className={styles.rodape}>
      <img src={logo_footer} alt="logo valdisnei" />
      <footer className={styles.Footer}>
        &#169;Valdisnei. Todos os direitos reservados.
      </footer>
    </div>
  )
}
