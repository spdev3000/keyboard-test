var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super();
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        // this.addEventListener('keydown', this.handleKey);
        this.handleKey = this.handleKey.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("ADD EVENTS");
        window.addEventListener('keydown', this.handleKey);
        window.addEventListener('keypress', () => { console.log("KEY PRESSED"); });
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleKey);
        super.disconnectedCallback();
    }
    handleKey(evt) {
        console.log(evt);
        this.evt = evt;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return html `
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <h2>Key Events:</h2>
      <ul>
        <li>Key: ${(_a = this.evt) === null || _a === void 0 ? void 0 : _a.key}</li>
        <li>Code: ${(_b = this.evt) === null || _b === void 0 ? void 0 : _b.code}</li>
        <li>Shift: ${(_c = this.evt) === null || _c === void 0 ? void 0 : _c.shiftKey}</li>
        <li>Meta: ${(_d = this.evt) === null || _d === void 0 ? void 0 : _d.metaKey}</li>
        <li>Alt: ${(_e = this.evt) === null || _e === void 0 ? void 0 : _e.altKey}</li>
        <li>Ctrl: ${(_f = this.evt) === null || _f === void 0 ? void 0 : _f.ctrlKey}</li>
        <li>location: ${(_g = this.evt) === null || _g === void 0 ? void 0 : _g.location}</li>
      </ul>
      <slot></slot>
    `;
    }
    _onClick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
};
MyElement.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property()
], MyElement.prototype, "name", void 0);
__decorate([
    property({ type: Object })
], MyElement.prototype, "evt", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map