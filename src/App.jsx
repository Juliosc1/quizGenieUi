import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Generator from "./pages/Generator";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import { useEffect, useState } from "react";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  }


  return (
    <div className="flex min-h-screen max-w-[1535px]">
      <Router>
        {!isMobile || isSidebarActive ? (
          <Sidebar toggleSidebar={toggleSidebar} />
        ) : null }
        
        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={toggleSidebar} isSidebarActive={isSidebarActive}/>
          <main className="flex h-full w-full">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/generator" element={<Generator /> } />
            </Routes>
          </main>
        </div>
          </Router>
    </div>
  )
}

export default App
