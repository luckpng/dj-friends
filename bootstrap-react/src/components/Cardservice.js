import styles from './Cardservice.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Cardservice = ({text, service, service1, service2, service3, service4}) => {
  return (
    <div className={styles.card_service}>
      <h3 className={styles.title}>{text}</h3>
      <div className={styles.services}>
        <p><span className={styles.service_span}><BsFillCheckCircleFill/></span>{service}</p>
        <p><span className={styles.service_span}><BsFillCheckCircleFill/></span>{service1}</p>
        <p><span className={styles.service_span}><BsFillCheckCircleFill/></span>{service2}</p>
        <p><span className={styles.service_span}><BsFillCheckCircleFill/></span>{service3}</p>
        <p><span className={styles.service_span}><BsFillCheckCircleFill/></span>{service4}</p>
      </div>
    </div>
  )
}

export default Cardservice