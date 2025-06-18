import "./Footer.css";
import logoinstagram from "/instagram.png";
import logofacebook from "/facebook.png";
import logo from "/logo.png";
import ImgGitHub from "/github.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo principal */}
      

      {/* Links externos (exemplo: GitHub) */}
      <nav className="footer-section">
        <a href="https://github.com/VieiraQuezia/projeto_final_marvel.git" target="_blank" rel="noopener noreferrer">
          <img className="imgGithub" src={ImgGitHub} alt="GitHub" width={40} height={40}/>
        </a>
      </nav>

      {/* Redes Sociais */}
      <div className="footer-section footer-social">
        <div className="info">
          <img className="imgRedes" src={logoinstagram} alt="Instagram" width={40} height={40}/>
          <p>@TropadaMandioca6_oficial</p>
        </div>
        <div className="info">
          <img className="imgRedes" src={logofacebook} alt="Facebook" width={40} height={40}/>
          <p>Tropa Mandioca 6 Oficial</p>
        </div>
      </div>

      {/* Contatos */}
      <div className="footer-section footer-contact">
        <p>📞 Contato para Vendas: +55 (19) 46002-8239</p>
        <p>📩 Email: tropadamandioca6@gmail.com</p>
      </div>

      {/* Sobre o Projeto */}
      <div className="footer-section footer-about">
        <h4>Tropa da Mandioca © 2025</h4>
        <p>
          Nosso site, desenvolvido com React, React Router, useEffect e useState,
          permite que os usuários busquem heróis e os adicionem aos favoritos a partir de uma API.
          Os dados são armazenados no localStorage e exibidos dinamicamente em outra página,
          onde também é possível remover um herói dos favoritos. 💗
        </p>
      </div>

      <div className="footer-logo">
        <img className="imgLogo" src={logo} alt="Logo Tropa da Mandioca" width={200} height={100}/>
      </div>

      {/* Tecnologias usadas */}
      <div className="footer-section footer-technologies">
        <h4>Sistemas:</h4>
        <ul>
          <li>useEffect</li>
          <li>useState</li>
          <li>React Router Dom</li>
        </ul>
      </div>

      {/* Divisória */}
      <hr className="footer-divider" />

      {/* Integrantes da equipe */}
      <div className="footer-section footer-team">
        <ul>
          <li>Guilherme Gabriel Santana</li>
          <li>Hayeska Loredane Alves Machado</li>
          <li>Leonardo Mori Vicente</li>
          <li>Quezia Amaral Vieira</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
