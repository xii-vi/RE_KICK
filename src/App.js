import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      
    </div>
  );
}

export default App;

