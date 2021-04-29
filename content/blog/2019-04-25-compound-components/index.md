---
path: "/compound-components-modal"
date: "2019-04-25"
title: "Building Flexible and Reusable React Compound Components"
tags: ["Compound Components", "React", "javascript", "react context"]
excerpt: "Because inflexible components makes life more annoying"
---

Recently, I've been thinking about designing well made, reusable React components. This was after running into some painfully inflexible components in production, where generic components weren't developed with future reuse in mind.

For instance, imagine a Modal component that can be used as seen below:

```jsx
// this isn't a real component I've seen/used, this is
// just for demonstration purposes
<Modal
  content={"modal content"}
  onOpen={() => console.log("opened")}
  onClose={() => console.log("closed")}
  customContentStyle={{ backgroundColor: "blue" }}
  OpenButtonComponent={OpenButton}
  CloseButtonComponent={CloseButton}
/>
```

There's a few immediate problems to note with this component:

1. The component is completely inflexible. You have no control over how the modal's components will be rendered, and if you want something like custom behavior, you're screwed.
2. You are overloading the Modal with too many props. As a rule of thumb, if you're adding too many props to a component, you most likely are delegating too much responsibility to this component, and should be broken down to several components instead.

As a step up from this, you can implement a modal component like this:

```jsx
// From React Modal docs:
// https://github.com/reactjs/react-modal
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    )
  }
}
```

This is already much better than the first implementation because:

1. You have far more flexibility and control with managing the Modal, and you have solid primitives that enable you to create the Modal that you need
2. You are no longer overloading the Modal props; instead, you are delegating the props to the component that it is relevant to.

However, I still think this modal is problematic. **It is too imperative**: Every time you want to create a modal, you need to create some react state to manage the modal state, hook up the components to the proper open/close callbacks, hook up the components to the isOpen/Closed state, etc.

Having to write all this boilerplate for a Modal wastes developer time, which I believe is a code smell of sorts. Imperatively writing a Modal component like this every time you need a modal implies that this pattern, too, isn't quite suitable for the situation at hand.

In this situation, my goal would be to **determine a reasonable set of default behaviors for components, while providing a flexible API for developers to consume.**

Thus, as a spoiler, let's first look at the end result I ended up creating:

```jsx
import React from "react"
import Modal from "./Modal"

const App = () => (
  <Modal>
    <Modal.Content>
      <p>Hello world</p>
      <Modal.CloseButton style={{ color: "blue" }}>Cancel</Modal.CloseButton>
    </Modal.Content>
    <Modal.OpenButton>
      {({ openModal }) => {
        // if you need a custom render, provide a child render prop
        return <a onClick={openModal}>Open Modal</a>
      }}
    </Modal.OpenButton>
  </Modal>
)
```

This solves the issues I described so far:

1. The usage of the Modal component is now completely declarative, and is already built with reasonable defaults in behavior. You don't need to hook up buttons to the modal state, the default components already provide the expected behavior you want.
2. You can pass on props directly to the components that may need them, such as styles to a button, etc. This means that you have the flexibility to manage each component in isolation, rather than overloading one single component with too many props.
3. If you need custom behavior, you are provided with a mechanism (via children as a render prop) to overwrite rendering behavior with whatever custom behavior you want. This is pretty much inversion of control, where the Modal's components can provide useful functions as a dependency injection.

To achieve this, I created a set of tightly coupled components that share state via a React Context object (this React pattern is called "Compound Components", introduced by [Kent Dodds](https://kentcdodds.com/)).

What makes this pattern particularly powerful is that you are using a React context object to purposefully couple together components to enable powerful behavior when used in tandem.

In the case of this Modal, the usage of a React context object means you no longer need to worry about drilling props from parent to child components. You can have something like this:

```jsx
import React from "react"
import Modal, { MODAL_SIZES } from "modal"

const CloseButton = () => <Modal.CloseButton>Close Button</Modal.CloseButton>

const ButtonContainer = () => (
  <div>
    Button Container
    <CloseButton />
  </div>
)

const App = () => (
  <Modal size={MODAL_SIZES.MEDIUM}>
    <Modal.Content>
      <div>
        <p>Hello World</p>
        {/* notice how the Modal.CloseButton is nested deeply
        but because you're using a context object behind the scenes,
        you don't need to pass down the modal's state to the button!*/}
        <ButtonContainer />
      </div>
    </Modal.Content>
    <Modal.OpenButton>Open Button</Modal.OpenButton>
  </Modal>
)
```

A basic implementation of this Modal seen below ([click here for demonstration source code](https://github.com/aarron-lee/climate_change_pwa/blob/master/app/Components/Presentation/Modal/Modal.jsx)):

```jsx
// Note, this component has room for some cleanup
// But this is for demonstration purposes only
import React from "react"
import { Portal } from "react-portal"

import styles from "./ModalStyles"

export const MODAL_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
}

// create context object
const ModalContext = React.createContext()

const { Provider, Consumer } = ModalContext

const ToggleButton = ({ children, openOnClick = false, ...props }) => (
  <Consumer>
    {({ modalIsOpen, toggleModal }) => {
      if (children && typeof children === "function") {
        return children({
          modalIsOpen,
          toggleModal,
          openModal: () => toggleModal(true),
          closeModal: () => toggleModal(false),
        })
      }
      let changeModalState = () => toggleModal(openOnClick)
      return (
        <button {...props} onClick={changeModalState}>
          {children}
        </button>
      )
    }}
  </Consumer>
)

class Modal extends React.Component {
  state = {
    modalIsOpen: false,
  }

  static Content = ({ children }) => (
    <ModalContext.Consumer>
      {({ modalIsOpen, toggleModal, contentSize }) => {
        const closeModal = e => {
          e.stopPropagation()
          if (modalIsOpen) toggleModal(false)
        }

        return (
          <Portal>
            <div
              className={`${styles.modalBackdrop} ${
                modalIsOpen ? styles.backdropVisible : ""
              }`}
              onClick={closeModal}
            >
              <div
                className={`${styles.modalContent} ${styles[contentSize]}`}
                onClick={e => e.stopPropagation()}
              >
                {children}
              </div>
            </div>
          </Portal>
        )
      }}
    </ModalContext.Consumer>
  )

  static CloseButton = ({ children, ...props }) => (
    <ToggleButton openOnClick={false} {...props}>
      {children}
    </ToggleButton>
  )

  static OpenButton = ({ children, ...props }) => (
    <ToggleButton openOnClick={true} {...props}>
      {children}
    </ToggleButton>
  )

  toggleModal = newModalState => this.setState({ modalIsOpen: newModalState })

  render() {
    return (
      <Provider
        value={{
          modalIsOpen: this.state.modalIsOpen,
          toggleModal: this.toggleModal,
          contentSize: this.props.size,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

Modal.defaultProps = {
  size: MODAL_SIZES.MEDIUM,
}

export default Modal
```

So what enables this to work? Let's explain:

```jsx
const ModalContext = React.createContext()
const { Provider, Consumer } = ModalContext
```

Since this file is a javascript module, that means anything else declared in this file has a reference to this context object via lexical scoping (aka closure). Thus, any component declared in this file maintains a reference to this context object.

What this means is that, as seen in the `Modal.Content`, `Modal.CloseButton`, etc, they can all reference the same context object, and pull out values from this shared context object. Since the context object has `modalIsOpen: boolean` and `toggleModal : function`, these components can easily pull out whatever it needs from the Context object, and use it to fulfill it's desired default behavior.

Now, there is a caveat with this implementation: since we're using a React context object, any time the values in the context changes, it induces a complete rerender of all children in the Context Provider component. In this particular case, I would argue that you should do a full rerender, mainly because the only value that should really be changing is the `modalIsOpen` boolean. If it's toggled from true to false, you need to hide/unhide the modal anyways.

Nonetheless, depending on your use case, you should be aware of this caveat. On the upside, you get a powerful set of declarative, reusable components that should be usable for most standard modals you may need.
