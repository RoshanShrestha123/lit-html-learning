import {render,html} from './node_modules/lit-html/lit-html.js';

class ButtonComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        render(this.template("test button"),this.shadowRoot);
    }
    template(btn_name){
        return html`
            <button>${btn_name}</button>
        `;
    }
}
window.customElements.define('dynamic-text-tag',ButtonComponent);