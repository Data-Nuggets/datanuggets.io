import { css, html, LitElement } from "lit";

export class NavBar extends LitElement {
    static get properties() {
        return {
            navItems: { type: Array },
        };
    }

    constructor() {
        super();
        this.navItems = [
            { label: "Services", target: "#services" },
            { label: "About", target: "#about" },
            { label: "Contact", target: "#contact" },
        ];
    }

    static styles = css`
    :host {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      padding: 1rem;

      position: sticky;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.4);
    }

    a {
      color: var(--color-white);
      text-decoration: none;
      font-weight: 500;
      transition: 100ms ease-in-out;
    }

    a:hover {
      color: var(--color-blue);
    }

    img {
      width: 4rem;
    }

    @media only screen and (max-width: 720px) {
        :host {
            display: none;
    }
  `;

    render() {
        return html`
      <a href="/"><img src="../public/data-nuggets-logo.png" /></a>
      ${this.navItems.map(
            (navItem) => html`<a href="${navItem.target}">${navItem.label}</a>`
        )}
    `;
    }
}

if (!customElements.get("nav-bar")) {
    customElements.define("nav-bar", NavBar);
}
