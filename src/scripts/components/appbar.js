class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="#maincontent" class="skip-link">Jump to Content</a>
      <header>
        <div class="logo"><h1><span>Saras</span>wati</h1></div>
        <nav class="menu">
          <div class="menu-item"><a href="/">Home</a></div>
          <div class="menu-item"><a href="#">Favorite</a></div>
          <div class="menu-item"><a href="https://github.com/elzains?tab=repositories">About Us</a></div>
        </nav>
        <div class="hamburger">
          <div class="hamburger__line"><a href="#hamburgercontent">☰</a></div>
        </div>
      </header>
      <div class="navigation-drawer">
        <div class="navigation-drawer__header">
          <h3>Saraswati Resto</h3>
        </div>
        <div class="navigation-drawer__menu">
          <div class="navigation-drawer__menu-item"><a href="/">Home</a></div>
          <div class="navigation-drawer__menu-item"><a href="#">Favorite</a></div>
          <div class="navigation-drawer__menu-item"><a href="https://github.com/elzains?tab=repositories">About Us</a></div>
        </div>
      </div>
    `;
  }
}
customElements.define("app-bar", AppBar);