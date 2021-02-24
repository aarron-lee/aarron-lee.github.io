import React from "react"

import styles from "./cardStyles.module.scss"
import ThemeConsumer from "../../util/theme/themeConsumer"

const Card = ({ children, className }) => (
  <ThemeConsumer>
    {({ themeStyles: { cardStyles }, isMobile }) => (
      <div
        className={`${styles.card} ${
          isMobile ? styles.cardMobile : styles.cardDesktop
        } ${cardStyles} ${className}`}
      >
        {children}
      </div>
    )}
  </ThemeConsumer>
)

Card.defaultProps = {
  children: null,
  className: "",
}

export default Card
