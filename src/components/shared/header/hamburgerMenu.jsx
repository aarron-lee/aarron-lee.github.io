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
        {({ toggleMenu, isOpen }) => {
          if (typeof children === "function") {
            return children({ isOpen, toggleMenu })
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
          return (
            <ul
              className={`${styles.menuContent} ${
                isOpen ? styles.menuOpen : ""
              }`}
            >
              {children}
            </ul>
          )
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
