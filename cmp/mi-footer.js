class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Mario Cortes Navarrete.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
