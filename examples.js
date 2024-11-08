import Component from "./framework/component.js";

class MyComponent2 extends Component {
    constructor() {
        super();
    }
    render() {
        this.html(`<div id="div2">${this.params.value[0]}</div>`)
        console.log(this.params.value);
        this.shadowRoot.querySelector("#div2").addEventListener("click", () => console.log('hello'));
    }
}
customElements.define('my-component1', MyComponent2);

class MyComponent extends Component {
    render() {
        const makeHtml = () => {
            return [1, 2, 3, 5, 6, 7, 8].map((e,i) => {
                return `<my-component1 params='${e}'></my-component1>`
            }).join('')
        }

        this.html(`
            <div>
            <button id="div2">click me state :${this.subState.value} </button>
            ${this.params.value}
            </div> 
            ${makeHtml()}
        `)

        const inputElement = document.getElementById("input")

        const handleState = () => {
            this.params.value = 'gay'
            this.subState.value = this.subState.value + 1;
        }

        const handleInput = () => {
            this.subState.value = inputElement.value
        }

        inputElement.addEventListener('change', () => {
            handleInput()
        });

        this.attachEvent('#div2', 'click', () => handleState() );
    }
}
customElements.define('my-component', MyComponent);
