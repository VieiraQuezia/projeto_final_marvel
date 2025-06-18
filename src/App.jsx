import "./App.css";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ListaPersonagens from './components/listaPersonagens.jsx';

function App() {
  return (
    <div>
      <Header />
      <h2>Hero Card estilo Netflix:</h2>

      <ListaPersonagens />  {/* Aqui aparecem os cards da API com seu CSS */}

      <Footer />
    </div>
  );
}

export default App;
