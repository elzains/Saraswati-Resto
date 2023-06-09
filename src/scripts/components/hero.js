class HeroApp extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="hero">
          <h1 class="fade-in" id="typing"></h1>
        </div>
      `;
    }
  }
  customElements.define("hero-app", HeroApp);  