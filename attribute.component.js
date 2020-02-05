import {render,html} from './node_modules/lit-html/lit-html.js';

class AttributeComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        render(this.template('className'),this.shadowRoot);

    }
    template(name){
        return html`
            <div class=${name}>this is to test the atrribute</div>
        `;
    }
}
window.customElements.define('attribute-tag',AttributeComponent);