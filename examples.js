import Component from "./framework/component.js";

class MyComponent2 extends Component {
    render() {
        this.update(`<div id="div2">${this.state.value.params[1]}</div>`)

        this.shadowRoot.querySelector("#div2").addEventListener("click", () => console.log('hello'));
    }
}
customElements.define('my-component2', MyComponent2);

class MyComponent extends Component {
    render() {
        this.update(`
            <div id="div2">
                ${this.state.value.params}
            </div> 
            <my-component2 params='[69, 2]'>
        `)

        this.shadowRoot.querySelector("#div2").addEventListener("click", () => console.log('hello'));
    }
}
customElements.define('my-component', MyComponent)

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body style="margin: 0; padding: 0">

<my-component params='100'></my-component>

<script type="module" src="./examples.js"></script>
</body>
</html>

*/
