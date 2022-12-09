import './Budget.css'
import { useState } from 'react'

const Budget = () => {
  const [name, setName] = useState('')
  const [secondname, setSecondname] = useState('')
  const [number, setNumber] = useState('')
  const [valor, setValor] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(name, secondname, number, valor);
    try {
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          name,
          secondname,
          number,
          valor
        })
      })
      const responseData = response.json()
      if (!response.ok) {
        throw new Error(responseData.message)
      }
      alert('Enviado com sucesso')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='container_budget'>
      <h1 style={{color: '#F8FD0D', margin: '1em'}}>Faça seu orçamento</h1>
      <form className='form_group' onSubmit={handleSubmit}>
        <label>
          Nome:
          <br />
          <input type="text" name="name" id="name" placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Sobrenome:
          <br />
          <input type="text" name="secondname" id="secondname" placeholder='Digite seu sobrenome...' onChange={(e) => setSecondname(e.target.value)} />
        </label>
        <label>
          Telefone:
          <br />
          <input type="tel" name="number" id="number" placeholder='Exemplo: (47)99999-9999' onChange={(e) => setNumber(e.target.value)}/>
        </label>
        <label>
          Selecione o plano:
          <br />
          <select name="select" defaultValue={'basic'} onChange={(e) => setValor(e.target.value)}>
            <option value="basic">Basic</option>
            <option value="medium">Medium</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Budget