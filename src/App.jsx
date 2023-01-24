import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='AppDiv'>
      <NavBar/>
      <MainContent />
      <Footer/>
    </div>
  )
}

export default App
