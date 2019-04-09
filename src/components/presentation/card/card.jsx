import React from "react"

import styles from "./cardStyles.module.scss"
import ThemeConsumer from "../../util/theme/themeConsumer"

const Card = ({ children }) => (
  <ThemeConsumer>
    {({ themeStyles: { cardStyles }, isMobile }) => (
      <div
        className={`${styles.card} ${
          isMobile ? styles.cardMobile : styles.cardDesktop
        } ${cardStyles}`}
      >
        {children}
      </div>
    )}
  </ThemeConsumer>
)

export default Card
