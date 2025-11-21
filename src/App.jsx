import { useState } from 'react'
import Copyright from './components/Copyright'
import EnvelopeOverlay from './components/EnvelopeOverlay'
import Hero from './components/Hero'
import Container from './components/common/Container'
import MusicPlayer from './components/common/MusicPlayer'
import './styles/normalize.css'

function App() {
  const [musicStarted, setMusicStarted] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <>
      <EnvelopeOverlay onStartMusic={() => setMusicStarted(true)} opened={opened} setOpened={setOpened} />
      <MusicPlayer play={musicStarted} />
      <Container>
        <Hero visible={opened} />
        <Copyright />
      </Container>
    </>
  )
}

export default App
