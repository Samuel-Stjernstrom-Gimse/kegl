import Construct from "./construct.js";
import State from "./state.js";

class Component extends Construct  {
    constructor() {
        super();
        this.params = new State({name: 'samuel', params:''})
        this.subState = new State(0)
        this.subState.subRender(this)
        this.params.subRender(this)
    }

    static get observedAttributes() {
        return ['params']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'params') {
            this.params.value = newValue;
        }
    }

    attachEvent(target,listener, callback) {
        this.shadowRoot.querySelector(`${target}`).addEventListener(`${listener}`, () => {
            callback()
        });
    }
}

export default Component
