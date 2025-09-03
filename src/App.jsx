import './styles/normalize.css'
import Acknowledgement from './components/Acknowledgement'
import Address from './components/Address'
import Agenda from './components/Agenda'
import Confirmation from './components/Confirmation'
import Countdown from './components/Countdown'
import Dresscode from './components/Dresscode'
import Gallery from './components/Gallery'
import Hashtag from './components/Hashtag'
import Welcome from './components/Welcome'
import Hero from './components/Hero'
import Container from './components/common/Container'
import CarSection from './components/CarSection'

function App() {

  return (
   <Container>
    <Hero/>
   <Welcome/>
   <CarSection/>
   <Countdown/>
   <Gallery/>  
   <Address/>
    <Agenda/>
   <Dresscode/>
   <Hashtag/>
   <Confirmation/>
   <Acknowledgement/>
   
   </Container>
  )
}

export default App
