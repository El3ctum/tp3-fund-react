import Botao from './components/botao'

import './index.css'

function App() {
  return (
    <div className='p-6'>
      <Botao className={"bg-orange-400 min-w-40 max-w-80"} conteudo={"Botão"} onClick={() => {console.log("testando")}}/>
    </div>
  )
}

export default App
