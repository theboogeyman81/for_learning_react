import { useState } from 'react'


const Content = () => {
  const [name, setName] = useState('World')
  const names = ['John', 'Jane', 'Jim', 'Jill']

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * names.length)
    setName(names[randomIndex])
  }

  const handleClick2 = (clickedName) => {
    console.log(`${clickedName} was clicked`)
  }

  return (
    <main>
        <p>Hello {name}</p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => handleClick2('Dave')}>Clicked</button>
    </main>
  )
}

export default Content