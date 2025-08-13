import "./App.css";
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import ListaPersonagens from './components/listaPersonagens.jsx';

function App() {
  return (
    <div>
      <Header />
      
      <ListaPersonagens />  {/* Aqui aparecem os cards da API com seu CSS */}

      <Footer />
    </div>
  );
}

export default App;
