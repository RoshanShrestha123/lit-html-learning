import {render,html} from './node_modules/lit-html/lit-html.js';

class ExpressionTest extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        render(this.template(1000,1000),this.shadowRoot);

    }
    template(basic,allowance){
        return html`
            <p>total salary is: ${basic+allowance}</p>
        `;
    }
}
window.customElements.define('salary-tag',ExpressionTest);