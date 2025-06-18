import "./App.css";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ListaPersonagens from './components/listaPersonagens.jsx';
import BuscaHeroi from "./components/buscaHeroi.jsx";

function App() {
  return (
    <div>
      <Header />
      <BuscaHeroi/> {/* Aqui fica a barra de busca */}
      <h1>Personagens da Marvel</h1>
      <p>Encontre seus heróis favoritos!</p>
      <ListaPersonagens />  {/* Aqui aparecem os cards da API com seu CSS */}

      <Footer />
    </div>
  );
}

export default App;
