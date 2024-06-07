import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-50 text-black p-4 rounded-lg mb-4'>Hi Man!</h1>
      <Card userName="pikachu" image="https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527377_1280.jpg" about="Electricity type pokemon" />
      <Card userName="charmander" image="https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" about="Fire type pokemon"/>
    </>
    
    
  )
}

export default App
