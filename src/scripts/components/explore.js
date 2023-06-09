class ExploreApp extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <main id="maincontent">
          <div class="title-explore">
            <h3><span>Explore</span> Restaurant</h3>
          </div>
          <div class="container" style="display: flex">
            <div class="menu-list">
              <div class="row" id="list"></div>
            </div>
          </div>
        </main>
      `;
    }
  }
  customElements.define("explore-app", ExploreApp);