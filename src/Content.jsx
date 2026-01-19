const Content = () => {

    const names = ['John', 'Jane', 'Jim', 'Jill']
    const int = Math.floor(Math.random() * names.length)
    const name = names[int]


    const handleClick = () => {
        console.log('You clicked it!')
    }

  return (
    <main>
        <p>Hello {name}</p>
        <button onClick={handleClick}>Click it</button>
    </main>
  )
}

export default Content