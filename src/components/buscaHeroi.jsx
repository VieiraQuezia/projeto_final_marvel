import { useState, useEffect } from "react";
import md5 from "blueimp-md5";
import "./buscaHeroi.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

function BuscaHeroi() {
  const [search, setSearch] = useState("");
  const [herois, setHerois] = useState([]);
  const [error, setError] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const CHAVE_PUBLICA = "ca9b85e8b5df8c4576a60b281ec0149f";
  const CHAVE_PRIVADA = "1d89c074f7724dda8d8b7b888e4501655e97fb38";

  // Função para buscar personagens na API
  async function buscarPersonagens() {
    setCarregando(true);
    setError(null);

    const ts = Date.now().toString();
    const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);
    const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&limit=20&ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.data.results.length === 0) {
        setError("Nenhum herói encontrado com esse nome.");
        setHerois([]);
      } else {
        setHerois(dados.data.results);
      }
    } catch (erro) {
      console.error("Erro ao buscar personagens:", erro);
      setError("Erro ao buscar personagens. Tente novamente mais tarde.");
    } finally {
      setCarregando(false);
    }
  }

  // Carrega alguns personagens padrão ao abrir a página
  }, []);

  // Adiciona herói aos favoritos
  const adicionarAosFavoritos = (heroi) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.push(heroi);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert(`${heroi.name} foi adicionado aos favoritos!`);
  };

  return (
    <>
      <Header />

      <div className="container">
        <input
          type="text"
          placeholder="Digite o nome do Herói"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field"
        />

        <button onClick={buscarPersonagens} className="button">
          Buscar Herói
        </button>

        {carregando && <p>Carregando...</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="herois-list">
          {herois.map((heroi) => (
            <div key={heroi.id} className="heroi-card">
              <h2>{heroi.name}</h2>
              <img
                src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
                alt={heroi.name}
              />
              <p>{heroi.description || "Sem descrição disponível."}</p>
              <button
                onClick={() => adicionarAosFavoritos(heroi)}
                className="favorites-button"
              >
                Adicionar aos Favoritos
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BuscaHeroi;
