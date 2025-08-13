import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import DetalhePersonagem from './components/detalhesHeroi';
import Home from './home'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jogador/:nome" element={<DetalhePersonagem/> } />
      </Routes>
    </Router>
  );
}

export default App;
