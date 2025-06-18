//Busca de Heróis




import React, { useEffect, useState } from "react";
import './styles/buscaHome.css';
import md5 from "blueimp-md5";

const CHAVE_PUBLICA = "5323f4be36461aa651d45a2c6c8035b0";
const CHAVE_PRIVADA = "dfc57c3ddfff308bbadcb36ec69b084480d73c2b";

function BuscaHome() {
    const [personagens, setPersonagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [busca, setBusca] = useState("");
    const [buscaInput, setBuscaInput] = useState("");
    const [erro, setErro] = useState(false);
    const [modoBusca, setModoBusca] = useState("nome"); // nome ou descricao

    const fraseEfeito = {
        "Spider-Man": "Vai teia 🕸",
        "Iron Man": "Eu sou o Homem de Ferro!",
        "Captain America": "O Primeiro Vingador!",
    };

    const emojis = {
        "Spider-Man": "🕷🕸",
        "Iron Man": "🤖💸",
        "Captain America": "🛡",
    };

    useEffect(() => {
        async function buscarPersonagens() {
            if (!busca) return;
            setCarregando(true);

            const ts = Date.now().toString();
            const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);
            const url = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;
            const resposta = await fetch(url);
            const dados = await resposta.json();

            const termo = busca.toLowerCase();

            const personagensFiltrados = dados.data.results.filter(personagem => {
                if (modoBusca === "nome") {
                    return personagem.name.toLowerCase().startsWith(termo);
                } else {
                    return (personagem.description || "").toLowerCase().includes(termo);
                }
            });

            setPersonagens(personagensFiltrados);
            setCarregando(false);
        }

        buscarPersonagens();
    }, [busca, modoBusca]);

    const clicarBotao = () => {
        if (buscaInput.trim() === "") {
            setErro(true);
            return;
        }
        setBusca(buscaInput);
        setBuscaInput("");
        setErro(false);
    };

    return (
        <>
            <section className="BuscaAPI-box-Barra">
                <select
                    className="BuscaAPI-select"
                    value={modoBusca}
                    onChange={(e) => setModoBusca(e.target.value)}
                >
                    <option value="nome">Buscar por Nome</option>
                    <option value="descricao">Buscar por Descrição</option>
                </select>

                <input
                    className="BuscaAPI-pesquisar"
                    value={buscaInput}
                    onChange={(e) => setBuscaInput(e.target.value)}
                    placeholder="Insira o nome ou descrição do herói"
                />
                <button className="BuscaAPI-botaoPesquisa" onClick={clicarBotao}>🔍</button>
                {erro && <p className="BuscaAPI-erro">Por favor, insira um texto para buscar.</p>}
            </section>

            <section className="BuscaAPI-BoxCards">
                {carregando ? (
                    <p>Carregando heróis...</p>
                ) : (
                    <>
                        {personagens.length === 0 ? (
                            <p>Nenhum personagem encontrado.</p>
                        ) : (
                            <>
                                {personagens.map((personagem) => (
                                    <section className="BuscaAPI-Cards" key={personagem.id}>
                                        <img
                                            className="BuscaAPI-Img"
                                            src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                                            alt={personagem.name}
                                        />
                                        <h3>
                                            {emojis[personagem.name]
                                                ? `${personagem.name} ${emojis[personagem.name]}`
                                                : personagem.name}
                                        </h3>
                                        <p>{fraseEfeito[personagem.name] || `${personagem.name} em ação! 🐱‍🏍`}</p>
                                        <p>{personagem.description || "Sem descrição disponível."}</p>
                                    </section>
                                ))}
                            </>
                        )}
                    </>
                )}
            </section>
        </>
    );
}

export default BuscaHome;