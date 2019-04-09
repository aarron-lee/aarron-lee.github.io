import React from "react"

import styles from "./cardStyles.module.scss"
import ThemeConsumer from "../../util/theme/themeConsumer"

const Card = ({ children }) => (
  <ThemeConsumer>
    {({ themeStyles: { cardStyles } }) => (
      <div className={`${styles.card} ${cardStyles}`}>{children}</div>
    )}
  </ThemeConsumer>
)

export default Card
