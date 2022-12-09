import CarouselBoot from "../components/CarouselBoot"
//import { Container } from "react-bootstrap"
import "./Home.css"
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import Cardservice from "../components/Cardservice"
 
const Home = () => {
  return (
    <>
      <CarouselBoot/>
      <div className="container_img">
        <img className="img_layout" style={{margin: '2em'}} src={logo} alt="" />
        <div className="container_layout">
          <h1 style={{color: '#F8FD0D'}}>Sobre nós</h1>
          <p style={{color: '#fff'}}>Estamos a mais de 7 anos no mercado, contando com uma equipe completa. Especialistas em sonorização e iluminação. Mais de 1000 eventos fechados contando com casamentos , festas de 15 anos e eventos no geral.</p>
          <Link to='/sobre' className="saibamais">Saiba mais</Link>
        </div>
      </div>
      <div className="servicos">
        <h1 style={{color: '#F8FD0D'}}>Serviços</h1>
        <div className="container_card">
          <Cardservice
            text='Iluminação'
            service=' Luz cênica'
            service1=' Luz cênica'
            service2=' Luz cênica'
            service3=' Luz cênica'
            service4=' Luz cênica'
          />
          <Cardservice
            text='Som'
            service=' Luz cênica'
            service1=' Luz cênica'
            service2=' Luz cênica'
            service3=' Luz cênica'
            service4=' Luz cênica'
          />
        </div>
      </div>
      <div className="frame">
        <iframe className="media_frame" src="https://www.youtube.com/embed/u7RVoNiz7ro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>Confira nossos vídeos <span><a style={{color: '#F8FD0D'}} href="https://www.youtube.com/watch?v=u7RVoNiz7ro&list=PL9BE37F83171159B5&index=7&ab_channel=SumerianRecords">Aqui!</a></span></p>
      </div>
      <div className="endereco">
        <h1 style={{color: '#F8FD0D'}}>Endereço</h1>
        <iframe className="media_frame" title="Google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114434.61156188243!2d-48.890967001267946!3d-26.323856718944338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb7e784437ce9%3A0x300f6d3e442f7f6c!2sDJ%20FERNANDO%20REINERT%20-%20PLAY%20DJ&#39;S!5e0!3m2!1spt-BR!2sbr!4v1668447712582!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <p>R. José Antônio Soares Pereira - Parque Guarani, Joinville - SC, 89209-495</p>
        <p>Contato: (047)99919-9470</p>
      </div>
    </>
  )
}

export default Home