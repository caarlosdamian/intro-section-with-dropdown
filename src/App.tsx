import { useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {

  const [showSidebar, setshowSidebar] = useState(false)

  return (
    <main className="App">
      {showSidebar && <Sidebar  setshowSidebar={setshowSidebar} showSidebar={showSidebar}  />}
      <Navbar setshowSidebar={setshowSidebar} showSidebar={showSidebar} />
      <Home />
    </main>
  )
}

export default App
