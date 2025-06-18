import './header.css';

export default function Header() {
  return (
    <>
    <header className="marvel-header">
     

      <div className="header-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="Marvel Logo"
          className="logo-image"
          width={150}
        />
      </div>

     

      <nav className="header-nav">
        <a href="#">NEWS</a>
        <a href="#">COMICS</a>
        <a href="#">CHARACTERS</a>
        <a href="#">MOVIES</a>
        <a href="#">TV SHOWS</a>
        <a href="#">GAMES</a>
        <a href="#">VIDEOS</a>
        <a href="#">MORE</a>
      </nav>
    </header>

    <article></article>
    </>
  );
}
