import "./Footer.css";
import ImgGitHub from "/github.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Logo Marvel e coluna 1 */}
        <div className="footer-column">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            alt="Marvel Logo"
            className="footer-marvel-logo"
          />
          <ul>
            <li>ABOUT MARVEL</li>
            <li>HELP/FAQS</li>
            <li>CAREERS</li>
            <li>INTERNSHIPS</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className="footer-column">
          <ul>
            <li>ADVERTISING</li>
            <li>DISNEY+</li>
            <li>MARVELHQ.COM</li>
            <li>REDEEM DIGITAL COMICS</li>
          </ul>
        </div>

        {/* GitHub como Marvel Unlimited */}
        <div className="footer-column">
          <a href="https://github.com/VieiraQuezia/projeto_final_marvel.git" target="_blank" rel="noopener noreferrer">
            <img src={ImgGitHub} alt="GitHub" className="footer-unlimited-logo" />
          </a>
          <p><strong>MARVEL UNLIMITED</strong></p>
          <p>Access Over 30,000+ Digital Comics</p>
        </div>

        {/* Redes sociais apenas visual */}
        <div className="footer-column">
          <p><strong>FOLLOW MARVEL</strong></p>
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
        <p>©2025 MARVEL</p>
      </div>
    </footer>
  );
}

export default Footer;
