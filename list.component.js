import {render,html} from './node_modules/lit-html/lit-html.js';

class ListComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    
    connectedCallback() {
        render(this.template(),this.shadowRoot);
    }

    template(){
            return html` <div>${this.listValue}</div>`; 
    }
}
window.customElements.define('list-tag',ListComponent);