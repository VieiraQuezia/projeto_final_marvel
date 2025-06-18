// Importando o hook useState do React para manipular estados dentro do componente
import { useState } from "react";
import { Link } from "react-router-dom";

// Importando a biblioteca md5, usada para gerar o hash de autenticação da API da Marvel
import md5 from "blueimp-md5";

// Importando o arquivo CSS com os estilos para este componente
import "./buscaHeroi.css";

// Função principal do componente BuscaHeroi
function BuscaHeroi() {
  // Estado para armazenar o texto digitado na busca
  const [search, setSearch] = useState("");

  // Estado que guarda a lista de heróis retornados pela API
  const [herois, setHerois] = useState([]);

  // Estado que guarda mensagens de erro (ex.: herói não encontrado ou erro de rede)
  const [error, setError] = useState(null);

  // Estado que indica se a busca está carregando (útil para mostrar um "Carregando...")
  const [carregando, setCarregando] = useState(false);

  // Chaves de autenticação da API da Marvel
  const CHAVE_PUBLICA = "ca9b85e8b5df8c4576a60b281ec0149f";
  const CHAVE_PRIVADA = "1d89c074f7724dda8d8b7b888e4501655e97fb38";

  // Função assíncrona que faz a busca dos personagens
  async function buscarPersonagens() {
    // Verifica se o campo de busca está vazio
    if (search.trim() === "") {
      setError("Por favor, digite o nome de um herói.");
      setHerois([]);  // Limpa os resultados anteriores
      return;         // Sai da função se não tiver nada digitado
    }

    setCarregando(true);  // Ativa o carregamento
    setError(null);       // Limpa erros anteriores

    // Gerando os parâmetros de autenticação exigidos pela API
    const ts = Date.now().toString();  // Timestamp atual
    const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);  // Gerando o hash md5 exigido

    // Montando a URL da API com os parâmetros
    const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&limit=20&ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;

    try {
      // Fazendo a requisição para a API da Marvel
      const resposta = await fetch(url);
      const dados = await resposta.json();

      // Se não encontrar nenhum herói, mostra mensagem de erro
      if (dados.data.results.length === 0) {
        setError("Nenhum herói encontrado com esse nome.");
        setHerois([]);  // Limpa a lista de heróis
      } else {
        // Se encontrar, atualiza o estado com os heróis retornados
        setHerois(dados.data.results);
      }
    } catch (erro) {
      // Caso ocorra algum erro de rede ou de requisição
      console.error("Erro na busca:", erro);
      setError("Erro ao buscar heróis. Tente novamente.");
    } finally {
      // Independentemente de sucesso ou erro, desativa o carregamento
      setCarregando(false);
    }
  }

  
return (
  <>
    <div className="busca-container">
      <input
        type="text"
        placeholder="Digite o nome do Herói"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="busca-input"
      />

      <button onClick={buscarPersonagens} className="busca-button">
        Buscar Herói
      </button>

      {carregando && <p className="busca-loading">Carregando...</p>}

      {error && <p className="busca-error">{error}</p>}

      <div className="busca-resultado">
        {herois.map((heroi) => (
            <Link to={`/personagem/${heroi.id}`} key={heroi.id} style={{ textDecoration: 'none' }}>
          <div key={heroi.id} className="busca-card">
            <h2>{heroi.name}</h2>
            <img
              src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
              alt={heroi.name}
            />
            <p className="busca-description">
              {heroi.description || "Sem descrição disponível."}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);
}
// Exporta o componente para ser usado em outras partes do projeto
export default BuscaHeroi;
