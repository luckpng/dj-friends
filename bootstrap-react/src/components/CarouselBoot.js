import Carousel from 'react-bootstrap/Carousel'
import dj from '../img/dj.png'
import dj1 from '../img/dj1.png'
import dj2 from '../img/dj3.png'
import './CarouselBoot.css'
import { Link } from 'react-router-dom'

const CarouselBoot = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dj}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='typograph' style={{color: '#F8FD0D'}}>Diversos planos para eventos</h3>
          <p className='typograph_p'>Confira nossos planos e descubra a melhor opção para seu evento</p>
          <Link to='/planos' className="btn_hover">Saiba mais</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dj1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='typograph' style={{color: '#F8FD0D'}}>A maior empresa de eventos de Santa Catarina</h3>
          <p className='typograph_p'>Mais de 1000 eventos em toda a região do Estado</p>
          <Link to='/sobre' className="btn_hover">Saiba mais</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dj2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='typograph' style={{color: '#F8FD0D'}}>A melhor opção para seu evento</h3>
          <p className='typograph_p'>
            Não perca tempo e faça seu orçamento
          </p>
          <Link to='/orçamento' className="btn_hover">Saiba mais</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBoot