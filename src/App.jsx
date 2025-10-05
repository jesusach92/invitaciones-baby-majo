import { useState } from 'react'
import Address from './components/Address'
import Agenda from './components/Agenda'
import CarSection from './components/CarSection'
import Confirmation from './components/Confirmation'
import Countdown from './components/Countdown'
import Dresscode from './components/Dresscode'
import EnvelopeOverlay from './components/EnvelopeOverlay'
import Gallery from './components/Gallery'
import GiftTable from './components/GiftTable'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Container from './components/common/Container'
import MusicPlayer from './components/common/MusicPlayer'
import './styles/normalize.css'

function App() {
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <>
      <EnvelopeOverlay onStartMusic={() => setMusicStarted(true)} />
      <MusicPlayer play={musicStarted} />
      <Container>
        <Hero />
        <Welcome />
        <CarSection />
        <Countdown />
        <Gallery />
        <Address />
        <Agenda />
        <GiftTable />
        <Dresscode />
        <Confirmation />
      </Container>
    </>
  )
}

export default App
