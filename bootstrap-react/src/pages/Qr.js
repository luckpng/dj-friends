import { useEffect, useState } from 'react'
import "./Qr.css"

const Qr = () => {
  const [base, setBase] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch('http://localhost:3001/qr')
        const responseData = await response.json()
        
        if (!response.ok) {
          throw new Error(responseData.message)
        }

        setBase(responseData)
      } catch (error) {
        console.log(error.message);
      }
    }

    read()
  },[]) 

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch('http://localhost:3001/status')
        const responseData = await response.json()
        
        if (!response.ok) {
          throw new Error(responseData.message)
        }

        setStatus(responseData)
      } catch (error) {
        console.log(error.message);
      }
    }

    read()
  },[]) 

  console.log(base.qr_code?.asciiQR)

  return (
    <div className='status'>
      {!status.connected &&
        <h1>Para se conectar posicione a câmera do celular no QRCode</h1>
      }
      <br />
      {(base) &&
        <div className={status.connected ? 'resources' : 'resources1' }>
          <h1 style={{color: '#F8FD0D' }}>Número de tentativas: {base.qr_code.attempts}</h1>
          <br />
          <img style={{height: '405px', width: '400px' }} src={base.qr_code.base64Qr} alt="sQrCode" />
        </div>
      }
      {status && 
        <h1 className='state'>{status.connected ? 'Conectado' : 'Desconectado' }</h1>
      }
    </div>
  )
}

export default Qr