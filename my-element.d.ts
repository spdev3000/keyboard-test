import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    evt?: KeyboardEvent;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleKey;
    private convertStringToHex;
    private isWindowsOS;
    render(): import("lit-html").TemplateResult<1>;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=my-element.d.ts.map