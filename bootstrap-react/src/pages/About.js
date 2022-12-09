import './About.css'
import sobre from '../img/sobre.png'
import fernando from '../img/fernando.png'

const About = () => {
  return (
    <>
      <div className='container_sobre'>
        <h1 style={{color: '#F8FD0D', margin: '1em'}}>Sobre nós</h1>
        <div className='container_sobreimg'>
          <img src={sobre} alt='sobre' className='image_sobre' />
          <div className='box_sobre'>
            <h2 style={{color: '#F8FD0D', margin: '1em 0'}}>O que é Play Dj's</h2>
            <p style={{color: '#fff'}}>Play Dj’s é uma empresa de Sonorização e iluminação voltada para eventos. A Play Dj’s foi fundada em janeiro de 2015 por Fernando Reinert e está atuando nesse mercado a mais de 7 anos, sendo exelência em seus serviços</p>
          </div>
        </div>
      </div>
      <div className='container_equipe'>
        <h1 style={{color: '#F8FD0D', margin: '1em'}}>Nossa equipe</h1>
        <div className='container_sobreimg'>
          <div className='box_sobre'>
            <h2 style={{color: '#F8FD0D', margin: '1em 0'}}>Fernando Reinert</h2>
            <p style={{color: '#fff'}}>Play Dj’s é uma empresa de Sonorização e iluminação voltada para eventos. A Play Dj’s foi fundada em janeiro de 2015 por Fernando Reinert e está atuando nesse mercado a mais de 7 anos, sendo exelência em seus serviços</p>
          </div>
          <img src={fernando} alt='sobre' className='image_sobre' />
        </div>
      </div>
      <div className='container_sobre'>
      <div className='container_sobreimg'>
          <img src={sobre} alt='sobre' className='image_sobre' />
          <div className='box_sobre'>
            <h2 style={{color: '#F8FD0D', margin: '1em 0'}}>O que é Play Dj's</h2>
            <p style={{color: '#fff'}}>Play Dj’s é uma empresa de Sonorização e iluminação voltada para eventos. A Play Dj’s foi fundada em janeiro de 2015 por Fernando Reinert e está atuando nesse mercado a mais de 7 anos, sendo exelência em seus serviços</p>
          </div>
        </div>
      </div>
      <div className='container_equipe'>
        <div className='container_sobreimg'>
          <div className='box_sobre'>
            <h2 style={{color: '#F8FD0D', margin: '1em 0'}}>Fernando Reinert</h2>
            <p style={{color: '#fff'}}>Play Dj’s é uma empresa de Sonorização e iluminação voltada para eventos. A Play Dj’s foi fundada em janeiro de 2015 por Fernando Reinert e está atuando nesse mercado a mais de 7 anos, sendo exelência em seus serviços</p>
          </div>
          <img src={fernando} alt='sobre' className='image_sobre' />
        </div>
      </div>
    </>
  )
}

export default About