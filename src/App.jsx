import { Cards } from './components/Cards' //hijo
import './App.css'
import { useState } from 'react'

// Componente padre

function App() {

  const image1 = 'https://www.html6.es/img/rey_ervigio.png'
  const image2 = 'https://www.html6.es/img/rey_atanagildo.png'
  const image3 = 'https://www.html6.es/img/rey_ataulfo.png'
  const image4 = 'https://www.html6.es/img/rey_leogivildo.png'
  
  const [msj, setMsj] =useState('Vota por tu rey favorito')

  const whoclick=(nombre, click) =>{
        setMsj(<div>Has votado por el rey <span className='red'>{nombre}</span> con una valoracion 
        de <span className='red'>{click}</span></div>)
  }
  return (
  <>
        <div className='mibox'>
        <h2>{msj}</h2>
        </div>
    <div className="App">
      <Cards clickrey={whoclick}
      nombre = 'Ervigio'
        vacas= '3'
        image= {image1}/>
      <Cards clickrey={whoclick}
      nombre = 'Atanagildo'
        vacas= '6'
        image= {image2}/>    
      <Cards clickrey={whoclick}
      nombre = 'Ataulfo'
        vacas= '11'
        image= {image3}/>
      <Cards clickrey={whoclick}
      nombre = 'Leogivildo'
        vacas= '2'
        image= {image4}/>              
    </div>
  </>
  )
}

export default App
