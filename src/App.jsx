import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Generator from "./pages/Generator";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generator" element={<Generator /> } />
        </Routes>
      </Router>
  )
}

export default App
