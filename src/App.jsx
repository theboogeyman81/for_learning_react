import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
  const [name, setName] = useState('World')

  const handleNameChange = () => {
    const names = ['John', 'Jane', 'Jim', 'Jill']
    const int = Math.floor(Math.random() * names.length)
    setName(names[int])
  }

  return (
    <>
      <div className='App'>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
