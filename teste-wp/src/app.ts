import express, { Request, Response } from 'express'
import Sender from './sender'
const cors = require('cors')

const sender = new Sender() 

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cors({credentials: true, origin: '*'}))

app.get('/qr', (req: Request, res: Response) => {
  return res.json({
    qr_code: sender.qrCode,
  })
})

app.get('/status', (req: Request, res: Response) => {
  return res.json({
    connected: sender.isConnected
  })
})

app.post('/send', async (req: Request, res: Response) => {
  const {name, secondname, number, valor} = req.body

  console.log(req.body);

  if (!name || !number || !secondname || !valor) {
    return res.status(422).json({message: 'Nome e contato são obrigatórios!'})
  }

  const numberDDD = number.substr(0, 2)
  const numberUser = number.substr(-8, 8)

  const contact = '55' + numberDDD + numberUser + '@c.us'

  try {
    await sender.sendText(contact, `Você escolheu o plano ${valor}, aguarde! Logo enviaremos todos os detalhes do seu orçamento!`)
    await sender.sendText(`554797301392@c.us`, `Cliente ${name} ${secondname}, número: ${number} escolheu plano ${valor}`)
    return res.status(200).json({message: "Mensagem enviada com sucesso!"})

  } catch (error) {
    res.status(500).json({message: "Erro no servidor!"})

    console.log(error);
  }
})

app.listen(3001, () => console.log("Server Started!"))