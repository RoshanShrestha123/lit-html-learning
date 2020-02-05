import {render,html} from './node_modules/lit-html/lit-html.js';

class EventHandle extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        render(this.template(),this.shadowRoot);
    }
    template(){
        return html`
            <button @click=${this.handleClick}>click me!</button>
        `;
    }
    handleClick = () => {
        alert("god dammit")
        
    }
}
window.customElements.define('event-tag',EventHandle);