import { create, SocketState, Whatsapp } from 'venom-bot'

export type QRCode = {
  base64Qr: string
  asciiQR: string
  attempts: number
}

class Sender {
  private client: Whatsapp
  private connected: boolean
  private qr: QRCode

  
  public get isConnected() : boolean {
    return this.connected
  }
  
  public get qrCode() : QRCode {
    return this.qr
  }

  constructor() {
    this.initialize()
  }

  async sendText(to: string, body: string) {
    await this.client.sendText(to, body)
  }

  private initialize() {
    const qr = (base64Qr: string, asciiQR: string, attempts: number) => {
      this.qr = {
        base64Qr,
        attempts,
        asciiQR
      }
    }

    const status = (statusSession: string) => {
      this.connected = [
        "isLogged",
        "qrReadSuccess",
        "chatsAvailable"
      ].includes(statusSession)
    }

    const start = (client: Whatsapp) => {
      this.client = client

      client.onStateChange((state) => {
        this.connected = state === SocketState.CONNECTED
      })
    }

    create('play-djs', qr, status, { headless: false })
      .then((client) => start(client))
      .catch((error) => console.log(error))
  }
}

export default Sender