
// import { Heading } from 'lucide-react'
import './App.css'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import States from './components/States'

function App() {
  

  return (
    <>
    <header className='w-11/12 mx-auto py-5'>
      <Navbar></Navbar>

    </header>
    <section>
      <Heading><h1>Kitchen Room</h1></Heading>
    </section>
    <section>
      <States></States>
    </section>
      {/* <Logo></Logo> */}
    </>
  )
}

export default App
