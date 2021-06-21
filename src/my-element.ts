
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  @property({type: Object})
  evt?: KeyboardEvent

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  constructor() {
    super();
    // this.addEventListener('keydown', this.handleKey);

    this.handleKey = this.handleKey.bind(this)
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("ADD EVENTS")
    window.addEventListener('keydown', this.handleKey);
    window.addEventListener('keypress', () => {console.log("KEY PRESSED")});
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKey);
    super.disconnectedCallback();
  }

  private handleKey(evt: KeyboardEvent): void {
    console.log(evt)
    this.evt = evt
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <h2>Key Events:</h2>
      <ul>
        <li>Key: ${this.evt?.key}</li>
        <li>Code: ${this.evt?.code}</li>
        <li>Shift: ${this.evt?.shiftKey}</li>
        <li>Meta: ${this.evt?.metaKey}</li>
        <li>Alt: ${this.evt?.altKey}</li>
        <li>Ctrl: ${this.evt?.ctrlKey}</li>
        <li>location: ${this.evt?.location}</li>
      </ul>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
