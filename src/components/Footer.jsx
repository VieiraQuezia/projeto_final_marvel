import "./Footer.css";
import ImgGitHub from "/github.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import logo from "/logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Logo Marvel e coluna 1 */}
        <div className="footer-column">
          <img
            src={logo}
            className="footer-marvel-logo"
          />
          <ul>
            <li>Guilherme Gabriel Santana</li>
            <li>Hayeska L. A. Machado</li>
            <li>Leornardo Mori Vicente</li>
            <li>Quezia Amaral Vieira</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className="footer-column">
          <ul>
            <li>React</li>
            <li>React Router Dom</li>
            <li>API MARVEL</li>
            <li>md5</li>
          </ul>
        </div>

        {/* GitHub como Marvel Unlimited */}
        <div className="footer-column">
          <a href="https://github.com/VieiraQuezia/projeto_final_marvel.git" target="_blank" rel="noopener noreferrer">
            <img src={ImgGitHub} alt="GitHub" className="footer-unlimited-logo" />
          </a>
          <p><strong>PROJETO MARVEL</strong></p>
          
        </div>

        {/* Redes sociais apenas visual */}
        <div className="footer-column">
          <p><strong>FOLLOW US</strong></p>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" /> 
            <img src={instagram} alt="Instagram" /> 
          </div>
        </div>

      </div>

      {/* Linha de baixo */}
      <div className="footer-bottom">
        <ul>
          <li>Condições para o uso</li>
          <li>Política de Privacidade</li>
          <li>Anúncios baseados em interesses</li>
          <li>Proteção de Dados no Brasil</li>
          <li>Acordo de licença</li>
        </ul>
        <p>©2025 GRUPO6</p>
      </div>
    </footer>
  );
}

export default Footer;
