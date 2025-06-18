import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import md5 from "blueimp-md5";

const CHAVE_PUBLICA = "ca9b85e8b5df8c4576a60b281ec0149f";
const CHAVE_PRIVADA = "1d89c074f7724dda8d8b7b888e4501655e97fb38";

function DetalhePersonagem() {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarDetalhe() {
      setCarregando(true);
      const ts = Date.now().toString();
      const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);
      const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;

      const resposta = await fetch(url);
      const dados = await resposta.json();
      setPersonagem(dados.data.results[0]);
      setCarregando(false);
    }

    buscarDetalhe();
  }, [id]);

  if (carregando) return <p>Carregando detalhes...</p>;
  if (!personagem) return <p>Personagem não encontrado.</p>;

  return (
    <div style={{ padding: 20, color: "white", backgroundColor: "#000", minHeight: "100vh" }}>
      <Link to="/" style={{ color: "red", textDecoration: "none", marginBottom: 20, display: "inline-block" }}>
        ← Voltar
      </Link>

      <h1>{personagem.name}</h1>
      <img
        src={`${personagem.thumbnail.path}/portrait_uncanny.${personagem.thumbnail.extension}`}
        alt={personagem.name}
        style={{ maxWidth: "300px", borderRadius: 8 }}
      />
      <p style={{ marginTop: 20 }}>
        {personagem.description ? personagem.description : "Sem descrição disponível para este personagem."}
      </p>
    </div>
  );
}

export default DetalhePersonagem;
