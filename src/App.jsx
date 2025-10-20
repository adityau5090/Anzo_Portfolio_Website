import React from 'react'
import Page1 from './pages/Page1'
import Headers from './components/Headers'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page2img from './pages/Page2img'

const App = () => {
  return (
    <>
      <div>
        <Headers />
        <Page1 />
        <Page2img/>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
      </div>
    </>
  )
}

export default App
