import React, { useEffect, useState } from "react";
import md5 from "blueimp-md5";
import './listaPersonagens.css'; // <-- Garante que o CSS que você passou esteja sendo aplicado

const CHAVE_PUBLICA = "ca9b85e8b5df8c4576a60b281ec0149f";
const CHAVE_PRIVADA = "1d89c074f7724dda8d8b7b888e4501655e97fb38";

function ListaPersonagens() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarPersonagens() {
      setCarregando(true);
      const ts = Date.now().toString();
      const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);
      const url = `https://gateway.marvel.com/v1/public/characters?limit=20&ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        setPersonagens(dados.data.results);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      } finally {
        setCarregando(false);
      }
    }

    buscarPersonagens();
  }, []);

  if (carregando) return <p>Carregando heróis...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
      {personagens.map((heroi) => (
        <div key={heroi.id} className="hero-card">
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${heroi.thumbnail.path}/standard_xlarge.${heroi.thumbnail.extension})`,}}
          ></div>
          <div className="hero-info">
            <h3>{heroi.name}</h3>
            {/* Se quiser pode incluir uma descrição ou ID do personagem */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaPersonagens;
