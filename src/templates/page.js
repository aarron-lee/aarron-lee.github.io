import React from "react"

import Header from "../components/shared/header/header"
import ThemeProvider from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"
import withIsMobile from "../components/util/withIsMobile"

import styles from "./pageStyles.module.scss"

const Page = ({ isMobile, children }) => (
  <ThemeProvider>
    <ThemeConsumer>
      {({ themeStyles }) => (
        <div>
          <Header headerColor={themeStyles.headerColor} isMobile={isMobile} />
          <div
            className={`${themeStyles.backgroundColor} ${
              styles.contentContainer
            }`}
          >
            <main className={styles.mainContent}>{children}</main>
          </div>
        </div>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

export default withIsMobile(Page)
