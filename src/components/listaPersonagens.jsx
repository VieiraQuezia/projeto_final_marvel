import React from "react";
import './listaPersonagens.css';  // CSS dos cards
import {  Link } from "react-router-dom";


// 🔹 Importando imagens de goleiros
import hugoPerfil from '../assets/jogadores/hugoSouza2.jpg';
import hugoCampo from '../assets/jogadores/hugoSouza.jpg';
import donelliPerfil from '../assets/jogadores/donelli.png';
import donelliCampo from '../assets/jogadores/donelli2.jpg';

// 🔹 Importando imagens de defensores
import angileriPerfil from '../assets/jogadores/angileri.png';
import angileriCampo from '../assets/jogadores/angileri2.jpg';
import biduPerfil from '../assets/jogadores/bidu.jpg';
import biduCampo from '../assets/jogadores/bidu2.jpeg';

// 🔹 Importando imagens de meio-campistas
import garroPerfil from '../assets/jogadores/garro.png';
import garroCampo from '../assets/jogadores/garro2.webp';
import yuriPerfil from '../assets/jogadores/yuri.png';
import yuriCampo from '../assets/jogadores/yuri2.webp';
import carrilloPerfil from '../assets/jogadores/carrilo.png';
import carrilloCampo from '../assets/jogadores/carrilo2.jpg';

// 🔹 Importando imagens de atacantes
import depayPerfil from '../assets/jogadores/depay.jpg';
import depayCampo from '../assets/jogadores/depay2.webp';
import romeroPerfil from '../assets/jogadores/romero.png';
import romeroCampo from '../assets/jogadores/romero2.jpg';

// 🔹 Importando imagens do técnico
import dorivalPerfil from '../assets/jogadores/dorival.jpg';
import dorivalCampo from '../assets/jogadores/dorival2.avif';

function ListaPersonagens() {

  const goleirosCorinthians = [
    {
      nome: "Hugo Souza",
      idade: 26,
      numero: 1,
      posicao: "Goleiro",
      tempoNoCorinthians: "Desde 2024",
      tempoContrato: "até 31/12/2028",
      habilidades: ["Reflexos", "Posicionamento", "Defesas difíceis"],
      imagemPerfil: hugoPerfil,
      imagemEmCampo: hugoCampo,
      trajetoria: "Chegou em 2024 como opção para a meta e logo assumiu protagonismo."
    },
    {
      nome: "Matheus Donelli",
      idade: 23,
      numero: 32,
      posicao: "Goleiro",
      tempoNoCorinthians: "Desde 2020 (base e promoção)",
      tempoContrato: "até 30/06/2028",
      habilidades: ["Saídas de bola", "Defesas difíceis", "Comando de área"],
      imagemPerfil: donelliPerfil,
      imagemEmCampo: donelliCampo,
      trajetoria: "Integrado à base desde criança, foi promovido em 2020 e se firmou como opção de confiança no gol."
    }
  ];

  const defensoresCorinthians = [
    {
      nome: "Fabrizio Angileri",
      idade: 31,
      numero: 26,
      posicao: "Lateral Esquerdo",
      tempoNoCorinthians: "Desde fevereiro de 2025",
      tempoContrato: "até 31/12/2025",
      habilidades: ["Cruzamento", "Visão tática", "Experiência"],
      imagemPerfil: angileriPerfil,
      imagemEmCampo: angileriCampo,
      trajetoria: "Contratado em fevereiro de 2025, trouxe experiência internacional."
    },
    {
      nome: "Matheus Bidu",
      idade: 26,
      numero: 21,
      posicao: "Lateral Esquerdo",
      tempoNoCorinthians: "Desde final de 2022",
      tempoContrato: "até 31/12/2027",
      habilidades: ["Marcação", "Apoio ofensivo", "Velocidade"],
      imagemPerfil: biduPerfil,
      imagemEmCampo: biduCampo,
      trajetoria: "Revelado pelo Guarani, chegou em 2022 e rapidamente se firmou na lateral-esquerda."
    }
  ];

  const meioCampistasCorinthians = [
    {
      nome: "Rodrigo Garro",
      idade: 27,
      numero: 8,
      posicao: "Meia Ofensivo",
      tempoNoCorinthians: "Desde janeiro de 2024",
      tempoContrato: "até 31/12/2028",
      habilidades: ["Criação de jogadas", "Chute de longa distância", "Bolas paradas", "Passe entre linhas"],
      imagemPerfil: garroPerfil,
      imagemEmCampo: garroCampo,
      trajetoria: "Chegou em 2024 e rapidamente se destacou como articulador das jogadas ofensivas."
    },
    {
      nome: "Yuri Alberto",
      idade: 24,
      numero: 9,
      posicao: "Atacante (Centroavante)",
      tempoNoCorinthians: "Desde 2024",
      tempoContrato: "até 31/07/2030",
      habilidades: ["Finalização", "Movimentação", "Faro de gol"],
      imagemPerfil: yuriPerfil,
      imagemEmCampo: yuriCampo,
      trajetoria: "Maior artilheiro do século 21 do Corinthians, destaque em 2025 com gols decisivos."
    },
    {
      nome: "André Carrillo",
      idade: 34,
      numero: 19,
      posicao: "Meia/Extremo",
      tempoNoCorinthians: "Desde setembro de 2024",
      tempoContrato: "até meados de 2026",
      habilidades: ["Experiência", "Drible", "Assistência"],
      imagemPerfil: carrilloPerfil,
      imagemEmCampo: carrilloCampo,
      trajetoria: "Chegou em setembro de 2024, eleito melhor meia do Paulistão 2025."
    }
  ];

  const atacantesCorinthians = [
    {
      nome: "Memphis Depay",
      idade: 31,
      numero: 10,
      posicao: "Atacante",
      tempoNoCorinthians: "Desde setembro de 2024",
      tempoContrato: "até meados de 2026",
      habilidades: ["Finalização", "Técnica", "Experiência internacional"],
      imagemPerfil: depayPerfil,
      imagemEmCampo: depayCampo,
      trajetoria: "Contratado como reforço de impacto em 2024."
    },
    {
      nome: "Ángel Romero",
      idade: 33,
      numero: 11,
      posicao: "Atacante",
      tempoNoCorinthians: "Desde dezembro de 2022",
      tempoContrato: "até dezembro de 2025",
      habilidades: ["Velocidade", "Finalização", "Experiência"],
      imagemPerfil: romeroPerfil,
      imagemEmCampo: romeroCampo,
      trajetoria: "Retornou ao Corinthians em 2023, renovando até dezembro de 2025."
    }
  ];

  const tecnicosCorinthians = [
    {
      nome: "Dorival Júnior",
      idade: 63,
      posicao: "Técnico",
      tempoNoClube: "Desde 28/04/2025",
      tempoContrato: "Até 31/12/2026",
      habilidades: ["Experiência nacional", "Estratégia tática", "Formação de elenco", "Liderança motivacional"],
      imagemPerfil: dorivalPerfil,
      imagemEmCampo: dorivalCampo,
      trajetoria: "Chegou ao Corinthians após passagem pela Seleção Brasileira."
    }
  ];

  const elencoCorinthians = [
    ...goleirosCorinthians,
    ...defensoresCorinthians,
    ...meioCampistasCorinthians,
    ...atacantesCorinthians,
    ...tecnicosCorinthians
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {elencoCorinthians.map((elenco, index) => (
        <Link to={`/jogador/${elenco.nome}`} style={{ textDecoration: 'none', color: 'inherit' }} className="hero-card-link">
        <div className="hero-card" key={index}>
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${elenco.imagemPerfil})` }}
          ></div>
          <div className="hero-info">
            <h3>{elenco.nome}</h3>
            <p>{elenco.posicao}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default ListaPersonagens;
