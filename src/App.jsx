// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import DetalhePersonagem from './components/detalhesHeroi';
// import Home from './home'; 

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/jogador/:nome" element={<DetalhePersonagem/> } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import "./App.css";

// const produtos = [
//   {
//     nome: "Apple Watch Series 10",
//     descricao: "É coisa fina.",
//     preco: "A partir de R$ 5.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-series10-hero",
//   },
//   {
//     nome: "iPhone 16e",
//     descricao: "Apple Intelligence",
//     preco: "A partir de R$ 5.799",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16e-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
//   {
//     nome: "iPad",
//     descricao: "Inspira. Desenha. Diverte.",
//     preco: "A partir de R$ 4.499",
//     imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-hero",
//   },
// ];

// export default function App() {
//   return (
//     <div className="carrossel-container">
//       <h2 className="titulo">As novidades. Veja o que acabou de chegar.</h2>
//       <div className="carrossel">
//         {produtos.map((item, index) => (
//           <div key={index} className="card">
//             <img src={item.imagem} alt={item.nome} className="imagem" />
//             <h3>{item.nome}</h3>
//             <p className="descricao">{item.descricao}</p>
//             <p className="preco">{item.preco}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso te ajudar a saber mais sobre meu cliente?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const API_KEY = "AIzaSyBuXiwPZ38_1tbceExMt93dzq4sn6HLRH0";
const MODEL = "gemini-2.0-flash";
 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    let promptBase = `
      Não escrever em linguagem Markdown. Você é um empresario em que esta tentando fazer com que as pessoas queiram contratar seu cliente para trabalhar na area de tecnologia. O usuario em que vai te 
      fazer pergntas para saber mais sobre seu cliente. É um recrutador ou alguem que quer contratar alguem para trabalhar na area de tecnologia,
      voce deve ajudar a criar respostas convincentes e que mostrem as habilidades. nome do seu cliente é inteiro é Guilherme Gabriel Santana Ferreira, tem 17 anos
      , data de nascimento é dia 28 de agosto de 2007, email é ggsantana18@gmail.com, linkedin é https://www.linkedin.com/in/guilherme-g-2a8ba6338/ , 
       github é https://github.com/Ticoliro08 , esse é o curriculo(se precisar mande partes do meucurriculo se necessario 
      para comprovar algo ou o curriculo inteiro dependendo da pergunta do usuario):

      Sou estudante do 3º ano do Ensino Médio no SESI Vinhedo e, paralelamente, curso o técnico em Análise e Desenvolvimento
       de Sistemas (ADS) no SENAI Vinhedo, com conclusão prevista para 2025. Tenho grande interesse pela área de tecnologia 
       e busco uma oportunidade como jovem aprendiz ou estagiário nas regiões de Vinhedo, Valinhos, Campinas ou arredores, 
       com o objetivo de aplicar meus conhecimentos, aprender continuamente e colaborar com soluções inovadoras.
Durante minha formação técnica, desenvolvi habilidades em linguagens como HTML, CSS, JavaScript e Python, além de estudar
 frameworks como React e React Native, focando no desenvolvimento web e mobile. Tenho noções em bancos de dados como MySQL
  e SQL Server, e experiência com controle de versão usando Git e GitHub. Também sou familiarizado com ferramentas como AWS,
   Google Cloud, AppSheet e metodologias ágeis, especialmente o Scrum.
Além das competências técnicas, destaco minhas habilidades interpessoais, como raciocínio lógico, resolução de problemas,
 boa comunicação, organização e trabalho em equipe. Tenho nível intermediário de inglês, aprimorado durante um intercâmbio
  de seis meses na cidade de Cardiff, no País de Gales (Wales), onde frequentei aulas intensivas de inglês de segunda a 
  sexta-feira. Essa experiência internacional contribuiu não apenas para o meu desenvolvimento no idioma, mas também para 
  a ampliação da minha capacidade de adaptação a diferentes contextos culturais e de comunicação intercultural.
Para aplicar meus conhecimentos na prática, realizei diversos projetos. Entre eles, criei dois aplicativos utilizando
 a plataforma AppSheet, sendo um para controle de vendas de uma loja de games e outro para o gerenciamento de tarefas 
 do dia a dia. Também desenvolvi múltiplos sites responsivos utilizando React, como um projeto de História abordando 
 as guerras do século 20 e um projeto de Biologia sobre ervas medicinais. Além disso, venho explorando o React Native
  para criar aplicativos simples, como parte dos meus estudos em desenvolvimento mobile.
Estou motivado a contribuir com dedicação e entusiasmo para o sucesso da equipe e da empresa, colocando em prática os 
conhecimentos adquiridos e buscando sempre evoluir profissionalmente. Estou disponível para atuar presencialmente na
 região de Vinhedo e arredores, com flexibilidade de horários para conciliar o trabalho com os estudos.


      Resposta do usuário: ${input}
    `;

    setInput("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: promptBase }],
              },
            ],
          }),
        }
      );
      const data = await res.json();
      let botReply =
   data?.candidates?.[0]?.content?.parts?.[0]?.text ||
   "Desculpe, não consegui entender. Pode reformular?";


     

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Erro na conexão.", sender: "bot" },
      ]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chat}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.msg,
              ...(msg.sender === "user" ? styles.user : styles.bot),
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}          placeholder="Digite aqui..."
        />
        <button style={styles.button} onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  chat: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  msg: {
    padding: "10px",
    borderRadius: "8px",
    maxWidth: "70%",
    whiteSpace: "pre-line",
  },
  user: {
    background: "#007aff",
    color: "white",
    alignSelf: "flex-end",
  },
  bot: {
    background: "#eee",
    alignSelf: "flex-start",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    marginLeft: "5px",
    padding: "8px 12px",
    background: "#007aff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
