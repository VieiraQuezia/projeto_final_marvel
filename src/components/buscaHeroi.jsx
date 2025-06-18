// Importando o hook useState do React para manipular estados dentro do componente
import { useState } from "react";

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
      {/* Container geral da página */}
      <div >
        {/* Campo de texto para o usuário digitar o nome do herói */}
        <input
          type="text"
          placeholder="Digite o nome do Herói"
          value={search}                      // Valor controlado pelo estado
          onChange={(e) => setSearch(e.target.value)}  // Atualiza o estado ao digitar
          
        />

        {/* Botão que dispara a busca quando clicado */}
        <button onClick={buscarPersonagens} >
          Buscar Herói
        </button>

        {/* Exibe "Carregando..." enquanto a requisição está sendo feita */}
        {carregando && <p>Carregando...</p>}

        {/* Exibe a mensagem de erro, se houver */}
        {error && <p >{error}</p>}

        {/* Lista de heróis encontrados */}
        <div >
          {herois.map((heroi) => (
            <div key={heroi.id} >
              {/* Nome do herói */}
              <h2>{heroi.name}</h2>

              {/* Imagem do herói */}
              <img
                src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
                alt={heroi.name}
              />

              {/* Descrição do herói (se não tiver, mostra um texto padrão) */}
              <p>{heroi.description || "Sem descrição disponível."}</p>

             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Exporta o componente para ser usado em outras partes do projeto
export default BuscaHeroi;
