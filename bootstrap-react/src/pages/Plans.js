import './Plans.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Plans = () => {
  return (
    <>
      <div className='container_plans'>
        <h1 style={{color: '#F8FD0D', margin: '1em'}}>Confira nossos planos</h1>
        <div className='card_plans'>
          <div className='header_plan' style={{backgroundColor: 'green'}}>
            <h2>Basic</h2>
          </div>
          <div className='body_plan'>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
          </div>
          <div className='footer_plan'>
            <p>O plano basico é para festas pequenas com no máximo 50 pessoas, recomendado para festas de aniversário pequenas</p>
          </div>
        </div>
        <div className='card_plans'>
          <div className='header_plan' style={{backgroundColor: '#1C79BC'}}>
            <h2>Medium</h2>
          </div>
          <div className='body_plan'>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
          </div>
          <div className='footer_plan'>
            <p>O plano basico é para festas pequenas com no máximo 50 pessoas, recomendado para festas de aniversário pequenas</p>
          </div>
        </div>
        <div className='card_plans'>
          <div className='header_plan' style={{backgroundColor: '#BC1C1C'}}>
            <h2>Expert</h2>
          </div>
          <div className='body_plan'>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
            <p><span style={{color: 'green'}}><BsFillCheckCircleFill/></span> Luz Cênica</p>
          </div>
          <div className='footer_plan'>
            <p>O plano basico é para festas pequenas com no máximo 50 pessoas, recomendado para festas de aniversário pequenas</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plans