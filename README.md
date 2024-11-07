# Kegl - Lightweight Vanilla JavaScript Framework

Welcome to **Kegl** - the world's first framework! designed to keep things as simple as possible. No compilers, no transpilers, and no headache. Just pure Vanilla JavaScript and a sprinkle of Kegl magic for building reactive, component-driven web applications. Perfect for those who like to stay in control, mix and match, or even throw in a little jQuery if you’re feeling nostalgic.

---

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Installation](#installation)
- [Core Concepts](#core-concepts)
  - [Construct](#construct)
  - [Component](#component)
  - [State](#state)
- [Examples](#examples)
  - [Creating Components](#creating-components)
  - [State Management](#state-management)
- [API Documentation](#api-documentation)
  - [Construct](#construct-api)
  - [Component](#component-api)
  - [State](#state-api)
- [Why Kegl?](#why-kegl)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

The **Kegl Framework** is a super lightweight JavaScript framework that provides the bare minimum needed to create reactive, component-based applications without any build step. Inspired by the simple things in life (like duct tape and Vanilla JS), Kegl aims to let you focus on your project, without dealing with a bloated toolchain.

Whether you're looking to enhance an existing app or build a single-page application from scratch, Kegl lets you decide when to use it and when to go vanilla. Because sometimes, all you need is just a little help from a tiny framework friend.

---

## Key Features

- **No Build Tools Required**: Just import and start creating.
- **Custom Components**: Build reusable components with ease.
- **Reactive State**: Manage state effortlessly, with subscriptions that auto-re-render.
- **Shadow DOM Support**: Keep your styles and components neatly encapsulated.
- **Extremely Lightweight**: No dependencies and minimal file size.
- **Mix and Match with Vanilla JS**: Use it as a helper, or go all in with Kegl.

---

## Installation

Simply clone the repo or copy the files directly into your project.

```bash
git clone https://github.com/yourusername/kegl.git
```

Then, import the files you need in your scripts.

```javascript
import Component from "./path/to/Component.js";
import Construct from "./path/to/Construct.js";
import State from "./path/to/State.js";
```

That's it! You’re ready to start building with Kegl.

---

## Core Concepts

### Construct

`Construct` is the base class for all Kegl components. It manages a component's lifecycle and provides methods for rendering and managing child components.

### Component

`Component` extends `Construct` and adds support for reactive properties and attribute handling. This is your go-to class for creating custom elements that react to state changes.

### State

The `State` class enables reactive state management. When the state value changes, all components subscribed to that state will automatically re-render.

---

## Examples

### Creating Components

Here's how you can create a simple `Kegl` component:

```javascript
import Component from "./Component.js";

class MyComponent extends Component {
    constructor() {
        super();
        this.state = new State({ name: "world" });
        this.state.subRender(this); // auto-renders on state change
    }

    render() {
        this.update(`<h1>Hello, ${this.state.value.name}!</h1>`);
    }
}

customElements.define("my-component", MyComponent);
```

And in your HTML:

```html
<my-component></my-component>
```

### State Management

`State` makes managing and re-rendering components a breeze:

```javascript
const state = new State({ count: 0 });

state.subscribe(() => {
    console.log(`The count is now ${state.value.count}`);
});

// Update state
state.value = { count: state.value.count + 1 };
```

---

## API Documentation

### Construct API

#### `connectedCallback()`
Invoked when the component is added to the DOM. Automatically triggers the first render.

#### `render()`
Defines the initial rendering logic for the component. Override this in subclasses to define custom content.

#### `update(html)`
Updates the inner HTML of the shadow root. Takes a string as `html` and applies it to the component.

### Component API

#### `static get observedAttributes()`
Lists attributes that the component will observe for changes. Override in custom components to add your own observed attributes.

#### `attributeChangedCallback(name, oldValue, newValue)`
Handles changes to observed attributes, letting you respond to attribute updates.

#### `attachEvent(target, listener, callback)`
Easily attaches an event listener to a shadow DOM element by targeting it with a selector, specifying an event type, and providing a callback function.

### State API

#### `get value()`
Returns the current state value.

#### `set value(newValue)`
Updates the state value and notifies all subscribers if the value has changed.

#### `subscribe(subscriber)`
Registers a subscriber callback that will be notified when the state changes.

#### `subRender(subscriber)`
Registers a component to automatically call its `render` method upon state changes.

#### `notify()`
Triggers each subscriber to execute its callback, enabling reactivity.

---

## Why Kegl?

In a world full of big, complicated frameworks, sometimes you just need something small. Kegl is like a tiny toolkit that fits in your back pocket. You can pull it out whenever you need a little extra help without getting tangled in a framework's world. Add it to existing projects or start from scratch with Kegl at the core. Either way, it's here to make development faster, simpler, and a bit more fun.

---

## Contributing

All contributions are welcome! Feel free to submit issues, feature requests, or pull requests.

---

## License

Kegl is open-source under the MIT License. So go forth and build awesome things!
