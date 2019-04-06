import React, { Component } from "react"

import styles from "./hamburgerMenuStyles.module.scss"

const HamburgerMenuContext = React.createContext()

class HamburgerMenu extends Component {
  state = {
    isOpen: false,
  }

  static Item = ({ children }) => (
    <li className={styles.menuItem}>{children}</li>
  )

  static Button = ({ children }) => {
    return (
      <HamburgerMenuContext.Consumer>
        {({ toggleMenu }) => {
          if (typeof children === "function") {
            return children({ toggleMenu })
          }
          return <button onClick={toggleMenu}>menu</button>
        }}
      </HamburgerMenuContext.Consumer>
    )
  }

  static Content = ({ children }) => {
    return (
      <HamburgerMenuContext.Consumer>
        {({ isOpen }) => {
          if (isOpen) return <ul className={styles.menuContent}>{children}</ul>
          return null
        }}
      </HamburgerMenuContext.Consumer>
    )
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { children } = this.props

    return (
      <HamburgerMenuContext.Provider
        value={{ isOpen: this.state.isOpen, toggleMenu: this.toggleMenu }}
      >
        {children}
      </HamburgerMenuContext.Provider>
    )
  }
}

export default HamburgerMenu
