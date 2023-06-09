class footers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>
          &copy; ${new Date().getFullYear()} &dash; <a href="https://github.com/elzains?tab=repositories" target="_blank">All Rights Saraswati Resto</a>
        </p>
      </footer>
    `;
  }
}
customElements.define("footer-bar", footers);