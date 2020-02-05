import {render,html} from './node_modules/lit-html/lit-html.js';
import './dynamic.component.js';
import './expression.component.js';
import './attribute.component.js';
import'./properties.component.js';
import './eventhandler.component.js';
class Main_Test extends HTMLElement{
    constructor(){
        super();
        console.log("component created");
        this.attachShadow({mode:'open'})
        render(this.template(),this.shadowRoot);
    }
    template(){
        return html`
            <h1>main component</h1>
                <dynamic-text-tag></dynamic-text-tag>
                <salary-tag></salary-tag>
                <attribute-tag></attribute-tag>
                <properties-tag></properties-tag>
                <event-tag></event-tag>
            `
    }
}
window.customElements.define('main-test',Main_Test);