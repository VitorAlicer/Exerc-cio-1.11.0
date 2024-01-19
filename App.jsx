import { useState } from 'react'
import Message from './message'
import './App.css'
import Button from './button'

// carregado de um servidor;
const mensagens = [
  {
    mensagem: "Oi....",
    visualizado: true,
    remetente: true,
  },
  {
    mensagem: "Você não me ama mais?",
    visualizado: true,
    remetente: true,
  },
  {
    mensagem: "Oi, quem é você mesmo?",
    visualizado: true,
    remetente: false,
  },
  {
    mensagem: "Esquece....",
    visualizado: true,
    remetente: true,
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <div class="chat">
          <div class="header">
            <Button />
            <h3>Meu Chat</h3>
          </div>
          <div class="content">
            <ul>
              {
                mensagens.map(mensagem => (
                  <Message text={mensagem.mensagem} isSent={!mensagem.remetente} viewed={mensagem.visualizado} />
                ))
              }
            </ul>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
