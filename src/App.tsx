import './App.css'
import { Navbar } from './components/estaticos/navbar/Navbar'
import { Home } from './paginas/home/Home'
import { Footer } from './components/estaticos/footter/Footer'
import { Login } from './paginas/login/Login'

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Login/>
      <Footer />
    </>
  )
}

export default App
