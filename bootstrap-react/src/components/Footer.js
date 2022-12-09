import styles from './Footer.module.css'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p style={{margin: 0}}>Confira mais em nossas redes sociais:</p>
      <div className="medias">
        <span className={styles.span_medias}>
          <a href="https://www.facebook.com/profile.php?id=100008809659464"><BsFacebook style={{margin: '0 .5em'}}/></a>
          <a href="https://www.instagram.com/play.djs/"><BsInstagram style={{margin: '0 .5em',}}/></a>
          <a href="https://web.whatsapp.com/"><BsWhatsapp style={{margin: '0 .5em'}}/></a>
        </span>
      </div>
      <p style={{marginTop: '.5em'}}>Created by Ricardo &copy; 2022</p>
    </footer>
  )
}

export default Footer