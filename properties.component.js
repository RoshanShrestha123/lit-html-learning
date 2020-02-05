import {render,html} from './node_modules/lit-html/lit-html.js';
import './list.component.js';

class PropertiesTest extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        render(this.template(),this.shadowRoot);

    }
    template(){
        const data = "this is the data, from properties";
        return html`
            <list-tag .listValue=${data} @click=${this.handleClick}></list-tag>
        `;
    }
    handleClick = () =>{
        console.log("this is handle click");
    }
}
window.customElements.define('properties-tag',PropertiesTest);