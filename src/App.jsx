import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Generator from "./pages/Generator";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";

function App() {

  return (
    <div className="flex h-screen max-w-[1535px]">
      <Router>
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
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
