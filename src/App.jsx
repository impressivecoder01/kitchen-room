
// import { Heading } from 'lucide-react'
import './App.css'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import States from './components/States'
import OrderContainer from './components/OrderContainer'
import { Suspense } from 'react'
const loadOrder =()=> fetch('/json/orders.json').then(res => res.json())
function App() {
  const ordersPromise = loadOrder()
// console.log(ordersPromise)
  return (
    <>
    <header className='w-11/12 mx-auto py-5'>
      <Navbar></Navbar>

    </header>
    <section>
      <Heading><h1>Kitchen Room</h1></Heading>
    </section>
    <section>
      <Suspense fallback={`Loading...`}>
      <OrderContainer promise ={ordersPromise}></OrderContainer>
      </Suspense>
    </section>
      
    </>
  )
}

export default App
