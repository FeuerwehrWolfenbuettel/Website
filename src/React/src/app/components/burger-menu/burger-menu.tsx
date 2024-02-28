import "./burger-menu.scss"

function BurgerMenu() {
  return (
    <div>
        <div className="logo-nav">
          <a href="/">
            <img
              src="/assets/Logo with Text.png"
              alt="Logo"
              className="logo-invert"
            />
          </a>
        </div>

  	  <input id="burger" type="checkbox" />

      <label htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>    
        <ul>
        <li><a href="/">Home</a></li>
            <li><a href="/about">Über uns</a></li>
            <li><a href="/firestation">Feuerwache</a></li>
            <li><a href="/vehicles">Fahrzeuge</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><button className="join-button">Mitglied werden</button></li>
        </ul>  
      </nav>
    </div>
  );
}

export default BurgerMenu;
